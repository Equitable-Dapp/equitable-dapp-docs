---
sidebar_position: 5
---

# Smart contract details

## Smart Contract Functions:

The smart contract features functions for users to submit reports, view existing reports, and participate in DAO-related activities. Each function is thoroughly documented in the contract's codebase.

## Data Immutability:

Through the smart contract, once a report is submitted, it becomes immutable and tamper-proof on the Ethereum blockchain, ensuring the integrity of the data.

## Smart Contract

This sample contract allows users to submit incident reports, view existing reports, and includes basic functionalities.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin's Ownable contract for access control
import "@openzeppelin/contracts/access/Ownable.sol";

contract IncidentReportContract is Ownable {
    struct IncidentReport {
        uint256 reportId;
        address reporter;
        string description;
        uint256 timestamp;
    }

    IncidentReport[] public incidentReports;
    uint256 public reportCounter;

    event IncidentReported(uint256 indexed reportId, address indexed reporter, string description, uint256 timestamp);

    constructor() {
        reportCounter = 0;
    }

    function submitIncidentReport(string memory _description) external {
        require(bytes(_description).length > 0, "Description cannot be empty");

        reportCounter++;
        uint256 reportId = reportCounter;

        IncidentReport memory newReport = IncidentReport({
            reportId: reportId,
            reporter: msg.sender,
            description: _description,
            timestamp: block.timestamp
        });

        incidentReports.push(newReport);

        emit IncidentReported(reportId, msg.sender, _description, block.timestamp);
    }

    function getNumberOfReports() external view returns (uint256) {
        return incidentReports.length;
    }

    function getReportDetails(uint256 _reportId) external view returns (uint256, address, string memory, uint256) {
        require(_reportId > 0 && _reportId <= reportCounter, "Invalid report ID");
        IncidentReport memory report = incidentReports[_reportId - 1];
        return (report.reportId, report.reporter, report.description, report.timestamp);
    }
}

```

This smart contract provides the basic structure for submitting and retrieving incident reports. It includes a submitIncidentReport function for users to submit reports, a getNumberOfReports function to query the total number of reports, and a getReportDetails function to retrieve details of a specific report by its ID.

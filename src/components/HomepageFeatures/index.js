import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Empower Reporting",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Through our DApp, we aim to empower individuals to confidentially report
        incidents, thus contributing to a safer environment for survivors.
      </>
    ),
  },
  {
    title: "Data-Driven Insights",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Our data analytics platform provides valuable insights into the
        geographic distribution of incidents, allowing for informed
        interventions.
      </>
    ),
  },
  {
    title: "Community-Driven Solutions",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The DAO, with Kleros integration, ensures that decisions regarding
        reported incidents are made collectively, promoting fairness and
        transparency.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

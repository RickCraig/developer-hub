import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import TutorialCard from "./TutorialCard";
import { FeaturedList, STOList } from "./data/securityTestingOrchestrationData";
import { useColorMode } from "@docusaurus/theme-common";
export default function STO() {
  const { colorMode } = useColorMode();
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  return (
    <div className="container">
      <div className={styles.SectionName}>
        <h3>Scan your code, containers and live apps</h3>
      </div>
      <div className={styles.topSection}>
        <div className={styles.spaceBetween}>
          <div className={styles.moduleTitle}>
            <img src={`${baseUrl}img/icon_sto.svg`} />
            <h1>Security Testing Orchestration</h1>
          </div>
          <div className={styles.btnContainer}>
            <Link href="/docs/security-testing-orchestration">
              <button
                className={clsx(
                  "button button--lg",
                  styles.btn,
                  styles.btnLight
                )}
              >
                {/* <i className="fa-regular fa-file"></i> */}
                <img src={`${baseUrl}img/icon_documentation.svg`} />
                Documentation
              </button>
            </Link>

            <Link href="/release-notes/security-testing-orchestration">
              <button
                className={clsx(
                  "button button--lg",
                  styles.btn,
                  styles.btnLight
                )}
              >
                {/* <i className="fa-regular fa-file"></i> */}
                <img src={`${baseUrl}img/icon_release_notes.svg`} />
                Release Notes
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.spaceBetween}>
          <div className={styles.content}>
            <p>
              Harness STO enables DevOps and Security teams teams to left shift
              security testing as a key outcome of their DevSecOps initiative.
              STO orchestrates scanning, intelligently deduplicating scanner
              output, prioritizing remediations, and enforcing governance into
              your Pipeline. STO puts scanning directly into your Pipelines to
              ensure that vulnerabilities are caught and fixed before your
              products are ever released.
            </p>
            <div className={styles.alignCenter}>
              <Link href="/docs/security-testing-orchestration">
                <button
                  className={clsx(
                    "button button--lg",
                    styles.btn,
                    styles.btnSTO
                  )}
                >
                  Documentation <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
              <Link href="https://harness.io/products/security-testing-orchestration">
                <button className={styles.link}>Learn more</button>
              </Link>
            </div>
          </div>

          <div className={styles.illustrationContainer}>
            <img
              className={styles.illustration}
              src={
                colorMode === "light"
                  ? `${baseUrl}img/sto.svg`
                  : `${baseUrl}img/STO_Dark.svg`
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.subSection}>
        <h3>Featured Tutorials</h3>
        <TutorialCard FeatureList={FeaturedList} featuredCard={true} />
      </div>
      <div className={styles.subSection}>
        <h3 id="all-tutorials">All STO Tutorials</h3>
        <TutorialCard FeatureList={STOList} />
      </div>
    </div>
    // </Layout>
  );
}

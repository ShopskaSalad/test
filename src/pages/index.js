import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

// Custom Package
import {Helmet} from "react-helmet";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="/docs/tutorial-basics/making-your-first-test-payment">
            Get Started
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--md"
            to="https://www.iyzico.com/demo">
            E-commerce Demo
          </Link>
        </div>
      </div>
    </header> 
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        {/* TODO: Find a better approach */}
        {/* <Helmet> */}
        {/* <script type="text/javascript">window.iyz = { token= '7ad20801-6c64-46b3-a7db-2bf7e2b4149e', position= 'bottomLeft', ideaSoft=false, pwi=true};</script> */}
        {/* <script type="text/javascript" src="https://static.iyzipay.com/buyer-protection/buyer-protection.js"></script> */}
        {/* </Helmet> */}

      </main>
    </Layout>
  );
}

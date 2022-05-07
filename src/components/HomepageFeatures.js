import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';



const FeatureList = [
  {
    title: 'Easy to Integrate',
    // Svg: require('../../static/img/clip/clip-easy.svg').default,
    Svg: require('../../static/img/integrate2-v1.svg').default,
    description: (
      <>
        Designed to be integrate easily.<br></br>
        Accept payments with single POST request.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Svg: require('../../static/img/clip/clip-chatting.svg').default,
    Svg: require('../../static/img/focus-v1.svg').default,
    description: (
      <>
        With PWI, merchants save huge amount of energy. <br></br> 
        Validation, infrastructure checks, or even design. <br></br>
        Redirect to the page, that is it.
      </>
    ),
  },
  {
    title: 'Secured by iyzico',
    Svg: require('../../static/img/safe2.svg').default,
    description: (
      <>
        Secure payment infrastructure, 24/7 live support.<br></br> 
        Plus, ease in cancellations/refunds processes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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

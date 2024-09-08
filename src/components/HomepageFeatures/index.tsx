import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Diverse Collection of Libraries',
    Svg: require('@site/static/img/image2.svg').default,
    description: (
      <>
      Our libraries are designed to be lightweight, modular, and easy to integrate into your projects.
        It was designed from the ground up to be easily installed and used in any project, regardless of its size or complexity.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/image1.svg').default,
    description: (
      <>
        Every library in our collection is thoroughly documented to ensure easy understanding and usage, even for beginners. You'll find detailed guides, API references, and example use cases.
      </>
    ),
  },
    {
        title: 'Community Contributions',
        Svg: require('@site/static/img/image3.svg').default,
        description: (
            <>
                Each library is open for contributions from the community. We encourage developers of all skill levels to participate by reporting issues, suggesting features, or submitting code improvements. Collaboration is key to making these libraries even more powerful.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

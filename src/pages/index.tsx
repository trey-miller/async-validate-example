import { graphql } from 'gatsby';
import * as React from 'react';
import { ValidatedInput } from '../components/ValidatedInput';
import * as styles from './Index.module.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

function validate(value: string): Promise<string | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (value && value.indexOf('foo') >= 0) {
        resolve(null);
      }
      resolve('Value does not contain foo.');
    }, 1000);
  });
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <>
        <main>
          <header>
            <h1>{name}</h1>
            {/* <p>{tagline}</p> */}
          </header>
          <div className={styles.Container}>
            <p>
              Enter a value. It will validate with a simulated API call,
              and determine if the value contains the text "foo".
            </p>
            <ValidatedInput validate={validate} />
          </div>
        </main>
      </>
    );
  }
}

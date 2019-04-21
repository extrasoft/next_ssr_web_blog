// Overide Default Error Page
import React, { Component } from 'react';
import Layout from '../components/Layout';

class Error extends Component {

  static getInitialProps({ res, error }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <Layout>
        <div className='container'>
          <div className='text-center'>
            <h3>
              { statusCode ?
                `An error ${statusCode} occured on server` :
                `An error occured on client`
              }
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Error;
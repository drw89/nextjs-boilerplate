import React from 'react';
import Head from 'next/head';

import Layout from '../components/organisms/DefaultLayout/DefaultLayout';
import Charts from '../components/organisms/Charts/Charts';

export const Overview = () => (
  <Layout>
    <Head>
      <title>Dashboard - Overview</title>
    </Head>
    <h1>Look at these beautiful components.</h1>
    <Charts />
  </Layout>
);

export default Overview;
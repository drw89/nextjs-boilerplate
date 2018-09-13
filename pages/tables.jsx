import React from 'react';
import Head from 'next/head';

import Layout from '../components/organisms/DefaultLayout/DefaultLayout';
import GenericTable from '../components/organisms/GenericTable/GenericTable';

export const Tables = () => (
  <Layout>
    <Head>
      <title>Dashboard - Tables</title>
    </Head>
    <h1>Look at these beautiful generic tables!</h1>
    <GenericTable tableID="table1" />
    <GenericTable tableID="table2" />
  </Layout>
);

export default Tables;
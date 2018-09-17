import React from 'react';
import Head from 'next/head';
import Layout from '../components/organisms/DefaultLayout/DefaultLayout';

export const Index = () => (
  <Layout>
    <Head>
      <title>Dashboard - Home</title>
    </Head>
    <h1>It&#39;s me. Your brand new dashboard!</h1>
    <p>Feel free to edit my pages and create new components.</p>
  </Layout>
);

export default Index;
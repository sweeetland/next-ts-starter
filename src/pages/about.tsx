import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '../components/layout/Layout';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;

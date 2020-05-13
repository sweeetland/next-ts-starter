import { NextPage } from 'next';
import Link from 'next/link';

import { Heading } from '@chakra-ui/core';

import Layout from '../components/layout/Layout';

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Heading as="h1">
      Hello Next.js{' '}
      <span role="img" aria-label="ds">
        👋
      </span>
    </Heading>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;

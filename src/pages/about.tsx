import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import Layout from '../components/Layout'

interface Props {
  hello: string
}

const AboutPage: NextPage<Props> = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage

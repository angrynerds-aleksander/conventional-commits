import React from "react"
import PaintDrip from "gatsby-plugin-transition-link/AniLink/PaintDrip"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const FirstPage = () => {
  return (
    <Layout disableLinks={true} nextPage='1'>
      <SEO title="Table of Contents" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flexGrow: 1 }}>
          <h1>Conventional Commits</h1>
          <h2>Table of Contents</h2>
          <p><PaintDrip to="/1/" hex="#004b9b">1. Semantic Versioning</PaintDrip></p>
          <p><PaintDrip to="/2/" hex="#354d9f">2. Conventional Commits</PaintDrip></p>
          <p><PaintDrip to="/3/" hex="#504ea2">3. Example Commits</PaintDrip></p>
          <p><PaintDrip to="/4/" hex="#674ea4">4. Conventional Changelog</PaintDrip></p>
          <p><PaintDrip to="/5/" hex="#7b4fa5">5. npm version</PaintDrip></p>
          <p><PaintDrip to="/6/" hex="#9350a3">6. .npmrc</PaintDrip></p>
        </div>
        <div style={{ maxWidth: `150px`, width: `150px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </Layout>
  )
};

export default FirstPage

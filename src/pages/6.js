import React from "react"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SixthPage = () => {
  return (
    <Layout previousPage="5">
      <SEO title=".npmrc" />
      <h1>.npmrc</h1>
      <section className="timeline-element">
        <h2>Can the process of versioning be even more automated?</h2>
        <article className="timeline-element">
        
          <p>
            By adding a <strong>.npmrc</strong> you could also automate your commit message and set your tag prefix
          </p><p>
            To do this, simply create <strong>.npmrc</strong> file or run the{" "}
            <strong>npm config</strong> command
          </p>
        </article>
        <article className="timeline-element">
          <p></p>
          <p><strong>tag-version-prefix=&quot;&quot;</strong></p>
          <p><strong>message=&quot;chore(release): %s :tada:&quot;</strong></p>
        </article>
      </section>
      <p className="timeline-element">
        Learn more at{" "}
        <a
          href="https://docs.npmjs.com/configuring-npm/npmrc.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.npmjs.com/configuring-npm/npmrc.html
        </a>
      </p>
      <Navigation previousPage="5. npm version" color="#9350a3" />
    </Layout>
  )
}

export default SixthPage

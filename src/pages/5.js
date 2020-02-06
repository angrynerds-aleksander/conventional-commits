import React from "react"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FifthPage = () => {
  return (
    <Layout nextPage="6" previousPage="4">
      <SEO title="npm version" />
      <h1>npm version</h1>
      <section className="timeline-element">
        <h2>How to use npm version?</h2>
        <article>
          <p>
            <em>
              npm version [&lt;newversion&gt; | major | minor | patch | premajor
              | preminor | prepatch | prerelease [--preid=&lt;prerelease-id&gt;]
              | from-git]
            </em>
          </p>
        </article>
        <article className="timeline-element">
          <p>
            npm version <strong>major</strong>
          </p>
          <p>
            npm version <strong>minor</strong>
          </p>
          <p>
            npm version <strong>patch</strong>
          </p>
          <p>
            npm version <strong>prerelease --preid=alpha</strong>
          </p>
          <p>
            npm version <strong>prerelease --preid=beta</strong>
          </p>
          <p>
            npm version <strong>prerelease --preid=rc</strong>
          </p>
        </article>
      </section>
      <section className="timeline-element">
        <h2>How to automate the changelog when changing versions?</h2>
        <article className="timeline-element">
          <p>You could use npm scripts:</p>
          <p>
            <strong>
              &quot;version&quot;: &quot;conventional-changelog -p angular -i
              CHANGELOG.md -s &amp;&amp; git add CHANGELOG.md&quot;
            </strong>
          </p>
          <p>
            You could also use <strong>preversion</strong> and{" "}
            <strong>postversion</strong> scripts to run tests before the version
            script and push changes after that
          </p>
        </article>
      </section>
      <p className="timeline-element">
        Learn more at{" "}
        <a
          href="https://docs.npmjs.com/cli/version"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.npmjs.com/cli/version
        </a>
      </p>
      <Navigation
        previousPage="4. Conventional Changelog"
        nextPage="6. .npmrc"
        color="#7b4fa5"
      />
    </Layout>
  )
}

export default FifthPage

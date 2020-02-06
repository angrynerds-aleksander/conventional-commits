import React from "react"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => {
  return (
    <Layout nextPage="4" previousPage="2">
      <SEO title="Example Commits" />
      <h1>Example Commits</h1>
      <article className="timeline-element">
        <p>
          <strong>feat(pencil):</strong> add 'graphiteWidth' option
        </p>
      </article>
      <article className="timeline-element">
        <p>
          <strong>fix(graphite):</strong> stop graphite breaking when width &lt;
          0.1
        </p>
        <p>Closes #28</p>
      </article>
      <article className="timeline-element">
        <p>
          <strong>perf(pencil):</strong> remove graphiteWidth option
        </p>
        <p>
          <strong>BREAKING CHANGE:</strong> The graphiteWidth option has been
          removed. The default graphite width of 10mm is always used for
          performance reason.
        </p>
      </article>
      <article className="timeline-element">
        <p>
          <strong>revert:</strong> feat(pencil): add 'graphiteWidth' option
        </p>
        <p>This reverts commit 667ecc1654a317a13331b17617d973392f415f02.</p>
      </article>
      <section className="timeline-element">
        <h2>Commiting Rules</h2>
        <article>
          <p>
            Use the <strong>imperative, present tense</strong>: "change" not
            "changed" nor "changes"
          </p>
          <p>
            <strong>Don't capitalize</strong> first letter of the subject
          </p>
          <p>
            <strong>No dot (.)</strong> at the end of the subject
          </p>
          <p>
            The body should include the{" "}
            <strong>motivation for the change</strong> and{" "}
            <strong>contrast this with previous behavior</strong>.
          </p>
          <p>
            The footer should contain any information about{" "}
            <strong>Breaking Changes</strong> and is also the place to reference{" "}
            <strong>GitHub issues that this commit Closes</strong>.
          </p>
        </article>
      </section>
      <Navigation
        previousPage="2. Conventional Commits"
        nextPage="4. Conventional Changelog"
        color="#674ea4"
      />
    </Layout>
  )
}

export default ThirdPage

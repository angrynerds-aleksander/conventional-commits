import React from "react"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => {
  return (
    <Layout nextPage="5" previousPage="3">
      <SEO title="Conventional Changelog" />
      <h1>Conventional Changelog</h1>
      <section className="timeline-element">
        <h2>How to generate a changelog with conventional commits?</h2>
        <article>
          <p>
            There are several ways to do this, but the best one is{" "}
            <strong>conventional-changelog-cli</strong>, which is a standardized
            cli tool
          </p>
        </article>
      </section>
      <section>
        <h2 className="timeline-element">How to use this tool?</h2>
        <article className="timeline-element">
          <p>
            Just install it globally using{" "}
            <strong>npm install -g conventional-changelog-cli</strong>
          </p>
        </article>
        <article className="timeline-element">
          <p>
            If this is your first time using this tool and you want to generate
            all previous changelogs, you could do:
            <br />
            <strong>
              conventional-changelog -p angular -i CHANGELOG.md -s -r 0
            </strong>{" "}
          </p>
        </article>
        <article className="timeline-element">
          <p>
            You could do{" "}
            <strong>
              conventional-changelog -p angular -i CHANGELOG.md -s
            </strong>{" "}
            to extend the changelog with the changes since the last version
          </p>
        </article>
        <article className="timeline-element">
          <p>
            All available command line parameters can be listed using CLI:{" "}
            <strong>conventional-changelog --help</strong>.
          </p>
        </article>
      </section>
      <p className="timeline-element">
        Get packages at{" "}
        <a
          href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages"
          target="_blank"
          rel="noopener noreferrer"
        >
          conventional-changelog
        </a>
      </p>
      <Navigation
        previousPage="3. Example Commits"
        nextPage="5. npm version"
        color="#674ea4"
      />
    </Layout>
  )
}

export default FourthPage

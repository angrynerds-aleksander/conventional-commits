import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Image from "../components/image-commit"

const ThirdPage = () => {
  return (
    <Layout nextPage="3" previousPage="1">
      <SEO title="Conventional Commits" />
      <h1>Conventional Commits</h1>
      <article className="timeline-element">
        <p>
          The <strong>Conventional Commits</strong> specification is a
          lightweight convention on top of commit messages. It provides an easy
          set of rules for creating an explicit commit history, which makes it
          easier to write automated tools on top of. This convention dovetails
          with <strong>SemVer</strong>, by describing the{" "}
          <strong>features</strong>, <strong>fixes</strong>, and{" "}
          <strong>breaking changes</strong> made in commit messages.
        </p>
      </article>
      <div
        style={{ display: "flex", marginBottom: `1.45rem`, flexWrap: "wrap", alignItems: `flex-end` }}
      >
        <section
          style={{ flexGrow: 1, marginRight: `1rem` }}
          className="timeline-element"
        >
          <h2>Commit message structure</h2>
          <article style={{ margin: 0 }}>
            <p>type(scope): description</p>
            <p>[blank line]</p>
            <p>[optional body]</p>
            <p>[blank line]</p>
            <p>[optional footer(s)]</p>
          </article>
        </section>
        <div
          style={{ maxWidth: `557px`, width: `100%` }}
          className="timeline-element"
        >
          <Image />
        </div>
      </div>
      <article className="timeline-element">
        <p>
          <strong>fix:</strong> a commit of the <em>type fix</em> patches a bug
          in your codebase (this correlates with <strong>PATCH</strong> in
          semantic versioning).
        </p>
        <p>
          <strong>feat:</strong> a commit of the <em>type feat</em> introduces a
          new feature to the codebase (this correlates with{" "}
          <strong>MINOR</strong> in semantic versioning).
        </p>
        <p>
          <strong>BREAKING CHANGE:</strong> a commit that has a footer{" "}
          <em>BREAKING CHANGE:</em>, or appends a <em>!</em> after the
          type/scope, introduces a breaking API change (correlating with{" "}
          <strong>MAJOR</strong> in semantic versioning). A BREAKING CHANGE can
          be part of commits of any type.
        </p>
        <p>
          <em>types</em> other than <em>fix</em> and <em>feat</em> are allowed,
          the Angular convention recommends <em>build</em>, <em>chore</em>,{" "}
          <em>ci</em>, <em>docs</em>, <em>style</em>, <em>refactor</em>,{" "}
          <em>perf</em>, <em>test</em>, and others.
        </p>
      </article>
      <p className="timeline-element">
        Learn more at{" "}
        <a
          href="https://www.conventionalcommits.org/en/v1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          conventionalcommits.org
        </a>
      </p>
      <Navigation
        previousPage="1. Semantic Versioning"
        nextPage="3. Example Commits"
        color="#504ea2"
      />
    </Layout>
  )
}

export default ThirdPage

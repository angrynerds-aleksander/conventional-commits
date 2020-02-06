import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Image from "../components/image-semver"

const SecondPage = () => {
  return (
    <Layout nextPage="2" previousPage="0">
      <SEO title="Semantic Versioning" />
      <h1>Semantic Versioning</h1>
      <div
        style={{ maxWidth: `378px`, width: `100%`, marginBottom: `1.45rem` }}
        className="timeline-element"
      >
        <Image />
      </div>
      <article className="timeline-element">
        <p>
          Given a version number <strong>MAJOR.MINOR.PATCH</strong>, increment
          the:
        </p>
        <p>
          <strong>MAJOR</strong> version when you make incompatible API changes,
        </p>
        <p>
          <strong>MINOR</strong> version when you add functionality in a
          backwards compatible manner, and
        </p>
        <p>
          <strong>PATCH</strong> version when you make backwards compatible bug
          fixes.
        </p>
        <p>
          Additional labels for pre-release and build metadata are available as
          extensions to the <strong>MAJOR.MINOR.PATCH</strong> format
        </p>
      </article>
      <article className="timeline-element">
        <div className="popover__container">
          <p className="popover">
            <strong>X Ranges: </strong>Any of X, x, or * may be used to “stand
            in” for one of the numeric values in the{" "}
            <strong>MAJOR.MINOR.PATCH</strong> tuple.
          </p>
          <div className="popover__content">
            <p>
              <strong>*</strong> is equal to <strong>&gt;=0.0.0</strong> (Any
              version satisfies)
            </p>
            <p>
              <strong>1.x</strong> is equal to{" "}
              <strong>&gt;=1.0.0 &lt;2.0.0</strong> (Matching major version)
            </p>
            <p>
              <strong>1.2.x</strong> is equal to{" "}
              <strong>&gt;=1.2.0 &lt;1.3.0</strong> (Matching major and minor
              versions)
            </p>
          </div>
        </div>
        <div className="popover__container">
          <p className="popover">
            <strong>Tilde Ranges: </strong>Allows patch-level changes if a minor
            version is specified on the comparator. Allows minor-level changes
            if not.
          </p>
          <div className="popover__content">
            <p>
              <strong>~1.2.3</strong> is equal to{" "}
              <strong>&gt;=1.2.3 &lt;1.3.0</strong>
            </p>
            <p>
              <strong>~1.2</strong> is equal to{" "}
              <strong>&gt;=1.2.0 &lt;1.3.0</strong> (Same as 1.2.x)
            </p>
            <p>
              <strong>~1</strong> is equal to{" "}
              <strong>&gt;=1.0.0 &lt;2.0.0</strong> (Same as 1.x)
            </p>
            <p>
              <strong>~0.2.3</strong> is equal to{" "}
              <strong>&gt;=0.2.3 &lt;0.3.0</strong>
            </p>
            <p>
              <strong>~0.2</strong> is equal to{" "}
              <strong>&gt;=0.2.0 &lt;0.3.0</strong> (Same as 0.2.x)
            </p>
            <p>
              <strong>~0</strong> is equal to{" "}
              <strong>&gt;=0.0.0 &lt;1.0.0</strong> (Same as 0.x)
            </p>
            <p>
              <strong>~1.2.3-beta.2</strong> is equal to{" "}
              <strong>&gt;=1.2.3-beta.2 &lt;1.3.0</strong>
            </p>
          </div>
        </div>
        <div className="popover__container">
          <p className="popover">
            <strong>Caret Ranges: </strong>Allows changes that do not modify the
            left-most non-zero digit in the <strong>MAJOR.MINOR.PATCH</strong>{" "}
            tuple. In other words, this allows patch and minor updates for
            versions 1.0.0 and above, patch updates for versions 0.X >=0.1.0,
            and no updates for versions 0.0.X.
          </p>
          <div className="popover__content">
            <p>
              <strong>^1.2.3</strong> is equal to{" "}
              <strong>&gt;=1.2.3 &lt;2.0.0</strong>
            </p>
            <p>
              <strong>^0.2.3</strong> is equal to{" "}
              <strong>&gt;=0.2.3 &lt;0.3.0</strong>
            </p>
            <p>
              <strong>^0.0.3</strong> is equal to{" "}
              <strong>&gt;=0.0.3 &lt;0.0.4</strong>
            </p>
          </div>
        </div>
      </article>
      <p className="timeline-element">
        Learn more at{" "}
        <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">
          semver.org
        </a>{" "}
        and{" "}
        <a
          href="https://docs.npmjs.com/misc/semver"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.npmjs.com/misc/semver
        </a>
      </p>
      <Navigation
        previousPage="0. Table of Contents"
        nextPage="2. Conventional Commits"
        color="#354d9f"
      />
    </Layout>
  )
}

export default SecondPage

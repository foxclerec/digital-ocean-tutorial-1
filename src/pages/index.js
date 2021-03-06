import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello Shoppers, we are open for business!</h1>
    <p>We sell fresh fruit.</p>
    <StaticImage
      src="../images/small-profile.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Sammy the Shark, an adorable cartoon shark and DigitalOcean"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage

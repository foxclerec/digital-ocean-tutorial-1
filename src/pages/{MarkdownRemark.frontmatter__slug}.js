import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.date}</p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

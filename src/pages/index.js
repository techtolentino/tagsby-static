import React from "react";
import { Link, graphql } from "gatsby";

import Card from "../components/card";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row bx--offset-lg-1">
        <div className="bx--col">
          {data.allMarkdownRemark.edges.map(group => (
            <div key={group.node.id}>
              <h1>{group.node.frontmatter.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export const goalsQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const GoalsPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(goal => (
      <div key={goal.node.id}>
        <h3>{goal.node.frontmatter.title}</h3>
        <Link to={goal.node.frontmatter.path}>View</Link>
      </div>
    ))}
  </Layout>
);

export const goalsQuery = graphql`
  query GoalsIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            description
            title
          }
        }
      }
    }
  }
`;

export default GoalsPage;

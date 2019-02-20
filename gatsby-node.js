const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const goalTemplate = path.resolve("src/templates/goals.js");

  return graphql(`
    {
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(post => {
      // for each item, conditionalize component template based on page type
      console.log(post, "<<<<<<<<<<<");
      createPage({
        path: item.node.frontmatter.path,
        component: goalTemplate
      });
    });
  });
};

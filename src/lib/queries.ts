export const GET_ALL_PRODUCTS = `
  query getAllProducts($cursor: String) {
    products(first: 50, after: $cursor) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          handle
          description
          tags
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;









export const GET_PRODUCT_BY_HANDLE = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            image {
              url
              altText
            }
          }
        }
      }
    }
  }
`;

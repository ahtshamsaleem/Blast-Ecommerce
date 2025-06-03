import axios from 'axios';

const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const shopify = axios.create({
  baseURL: `https://${shopifyDomain}/api/2024-04/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    'Content-Type': 'application/json',
  },
});

export default shopify;

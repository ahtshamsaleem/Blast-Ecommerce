import shopify from '@/src/lib/shopify';
import { GET_ALL_PRODUCTS } from '@/src/lib/queries';

export async function GET() {
  let products = [];
  let hasNextPage = true;
  let cursor = null;

  try {
    while (hasNextPage) {
      const res = await shopify.post('', {
        query: GET_ALL_PRODUCTS,
        variables: { cursor },
      });

      const edges = res.data.data.products.edges;
      const pageInfo = res.data.data.products.pageInfo;

      products.push(...edges.map(edge => edge.node));
      hasNextPage = pageInfo.hasNextPage;
      cursor = edges.length ? edges[edges.length - 1].cursor : null;
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
    });
  }
}

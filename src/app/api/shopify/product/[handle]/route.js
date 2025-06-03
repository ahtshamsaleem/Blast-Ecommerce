import shopify from '@/src/lib/shopify';
import { GET_PRODUCT_BY_HANDLE } from '@/src/lib/queries';

export async function GET(request, { params }) {
  const { handle } = await params;

  try {
    const response = await shopify.post('', {
      query: GET_PRODUCT_BY_HANDLE,
      variables: { handle },
    });

    const product = response.data?.data?.product;

    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Shopify API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch product data' }),
      { status: 500 }
    );
  }
}

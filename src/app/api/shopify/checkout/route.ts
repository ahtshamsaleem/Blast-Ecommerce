import shopify from '@/src/lib/shopify';
import { CREATE_CHECKOUT } from '@/src/lib/queries';

export async function POST(req) {
  try {
    const { items } = await req.json();

    console.log('Received items for checkout:💛', items);
    if (!items || !Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: 'No items provided' }), {
        status: 400,
      });
    }

    const lineItems = items.map(({ variantId, quantity }) => ({
      variantId,
      quantity,
    }));

    const response = await shopify.post('', {
      query: CREATE_CHECKOUT,
      variables: {
        input: {
          lineItems,
        },
      },
    });

    const checkout = response.data?.data?.checkoutCreate?.checkout;
    const errors = response.data?.data?.checkoutCreate?.userErrors;

    console.log('Checkout response:💙', response.data)
    console.log('Checkout errors:💜', errors);

    if (errors?.length) {
      return new Response(
        JSON.stringify({ error: errors.map((e) => e.message).join(', ') }),
        { status: 400 }
      );
    }

    if (!checkout?.webUrl) {
      return new Response(JSON.stringify({ error: 'Checkout URL not found' }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ checkoutUrl: checkout.webUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Checkout creation failed:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}

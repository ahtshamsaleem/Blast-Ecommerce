'use client';



export default function CheckoutButton({ cartItems }) {


  console.log('CheckoutButton cartItems:💕❣❣❣💛🧡💙💙💙', cartItems);


  const handleRedirect = () => {
    if (!cartItems || cartItems.length === 0) return;

    const cartString = cartItems
      .map(({ variantId, quantity }) => `${extractVariantId(variantId)}:${quantity}`)
      .join(',');

    const checkoutUrl = `https://blastargentina.com/cart/${cartString}`;
    window.location.href = checkoutUrl;
  };

  const extractVariantId = (gid) => gid.split('/').pop();

  return (
    <button onClick={handleRedirect}>
      Proceed to Checkout
    </button>
  );
}
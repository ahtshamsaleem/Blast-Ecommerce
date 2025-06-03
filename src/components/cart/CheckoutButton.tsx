'use client';



export default function CheckoutButton({ cartItems, onClose  }) {


  console.log('CheckoutButton cartItems:💕❣❣❣💛🧡💙💙💙', cartItems);


  const handleRedirect = () => {
    if (!cartItems || cartItems.length === 0) return;

    const cartString = cartItems
      .map(({ variantId, quantity }) => `${extractVariantId(variantId)}:${quantity}`)
      .join(',');

    const checkoutUrl = `https://blastargentina.com/cart/${cartString}`;
    window.location.href = checkoutUrl;
    onClose(); // Close the cart drawer after redirecting
  };

  const extractVariantId = (gid) => gid.split('/').pop();

  return (
    <button onClick={handleRedirect}>
      Proceed to Checkout
    </button>
  );
}
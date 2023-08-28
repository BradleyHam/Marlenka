// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST);

// const handleClick = async (quantity) => {
//   const response = await fetch('/api/create-checkout-session', { 
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ quantity: quantity }) // Pass the quantity in an object
//   });
//     const session = await response.json();
//     const stripe = await stripePromise;

//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) { 

//     }
//   };

//   export default handleClick;
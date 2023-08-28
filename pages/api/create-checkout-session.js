import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_TEST);

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { quantity } = req.body; 

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: 'Marlenka Honey Cake',
            },
            unit_amount: 1000, // price in cents
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: quantity // Use the quantity variable
        },
      ],
      mode: "payment",
      success_url: 'https://your-website.com/success',
      cancel_url: 'https://your-website.com/cancel',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Session creation failed:", error);
    res.status(500).json({ error: error.message });
  }
};


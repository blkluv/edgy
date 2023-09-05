import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key here
const stripePromise = loadStripe('your_stripe_public_key');

const Pricing = ({ loggedIn }) => {
  const ResetLocation = () => window.scrollTo(0, 0);

  const handleSubscribe = async () => {
    // Create a Stripe session or subscription here
    const stripe = await stripePromise;
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan: 'standard' }), // Replace with your plan
    });
    const session = await response.json();

    // Redirect to the Stripe checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle any errors
      console.error(result.error.message);
    }
  };

  return (
    <article className="bg-gray-900">
      <section className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20 bg-gray-900">
        <section className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Pricing
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Instagram Growth Plans
          </h3>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Various plans depending on your needs, capabilities, dreams, and business goals
          </p>
        </section>
      </section>

      <section className="mt-16 gray-900 pb-12 lg:mt-20 lg:pb-20">
        {/* Your pricing table goes here */}
      </section>

      <section className="mt-10">
        <section className="rounded-lg shadow-md">
          <button
            onClick={handleSubscribe}
            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-[color:var(--primary-font-color)] hover:bg-gray-50"
          >
            Get Started
          </button>
        </section>
      </section>
    </article>
  );
};

export default Pricing;

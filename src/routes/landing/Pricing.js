import React from 'react';

const Pricing = () => {
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

      {/* Stripe pricing table iframe */}
      <section className="mt-16 gray-900 pb-12 lg:mt-20 lg:pb-20">
        <iframe
          src="https://js.stripe.com/v3/pricing-table.html?pricingTableId=prctbl_1Nn41ZEC5zyE604bxb5g6CM7&publishableKey=pk_live_51N5TmzEC5zyE604bHEDASvvy2x73uOWACcLN2wkuxDlWWAUmxInsVIYxEEau3OZrUPSoXeo0NwUkXUcweISYYm7f00KuGsa5sr"
          title="Stripe Pricing Table"
          width="100%"
          height="1000" // Adjust the height as needed
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </section>

      <section className="mt-10">
        <section className="rounded-lg shadow-md">
        </section>
      </section>
    </article>
  );
};

export default Pricing;

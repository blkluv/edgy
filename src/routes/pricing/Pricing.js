import PricingFaq from "./PricingFaq";
import Partners from "../landing/Partners";
import * as React from 'react';

export default function Pricing({ loggedIn }) {
  return (
    <main className="bg-gray-900">
      <section className="text-center p-10">
        <h2 className="text-lg leading-6 font-semibold text-[color:var(--primary-font-color)] uppercase tracking-wider">
          Pricing Comparison
        </h2>
        <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Instagram Growth Plans
        </h3>
        <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
          Instagram Growth Plans offer a clear pathway to success, whether you are an aspiring influencer, a startup entrepreneur, or an established brand looking to expand your reach. Choose from our three meticulously designed plans - Starter, Pro, and Diamond - and embark on a transformational journey to elevate your Instagram growth.
        </p>
      </section>
      <PricingPage />
      <PricingFaq />
      <Partners />
    </main>
  );
}

function PricingPage() {
  // Use an iframe to embed the Stripe pricing table
  return (
    <>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table pricing-table-id="prctbl_1Nn41ZEC5zyE604bxb5g6CM7" publishable-key="pk_live_51N5TmzEC5zyE604bHEDASvvy2x73uOWACcLN2wkuxDlWWAUmxInsVIYxEEau3OZrUPSoXeo0NwUkXUcweISYYm7f00KuGsa5sr">
      </stripe-pricing-table>
    </>
  );
}

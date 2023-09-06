import React from "react";
import { Link } from "react-router-dom";

export default function Cta({ loggedIn }) {
  const ResetLocation = () => window.scrollTo(0, 0);
  const getStartedLink = loggedIn ? "/profile" : "/sign-up";

  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block text-white">Ready to subscribe?</span>
          <span className="block text-[color:var(--primary-font-color)]">
            Start your 14-day free trial today{" "}
            <a
             href="https://buy.stripe.com/6oE8xR5hR5zuby8dQQ"
             target="_blank"
             rel="noopener noreferrer"
             className="text-indigo-600 hover:underline"
             >
             Get Started
             </a>
            .
          </span>
        </h2>
        <section className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <section className="inline-flex rounded-md shadow">
          <a
             href="https://buy.stripe.com/6oE8xR5hR5zuby8dQQ"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
             >
             Get Started
             </a>
          </section>
        </section>
      </section>
    </article>
  );
}

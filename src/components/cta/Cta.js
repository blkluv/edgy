import React from "react";
import { Link } from "react-router-dom";

export default function Cta({ loggedIn }) {
  const ResetLocation = () => window.scrollTo(0, 0);
  const getStartedLink = loggedIn ? "/profile" : "/sign-up";

  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block text-white">Ready to dive in?</span>
          <span className="block text-[color:var(--primary-font-color)]">
            Start your free trial today by sending us a DM on{" "}
            <Link
              to={getStartedLink}
              onClick={ResetLocation}
              className="text-indigo-600 hover:underline"
            >
              Get Started
            </Link>
            .
          </span>
        </h2>
        <section className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <section className="inline-flex rounded-md shadow">
            <Link
              onClick={ResetLocation}
              to={getStartedLink}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </Link>
          </section>
        </section>
      </section>
    </article>
  );
}

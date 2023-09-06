import React from 'react';
import { Link } from 'react-router-dom';

export default function Newsletter() {
  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <section className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Subscribe to our newsletter to receive the latest updates, exclusive offers, and valuable insights. Join our community of forward-thinkers and never miss out on exciting news again. Simply enter your email below and be part of the conversation!
          </p>
        </section>
        <section className="mt-8 lg:mt-0 lg:ml-8">
          <iframe src="https://arvrtise.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameBorder="0" scrolling="no"></iframe>
          <p className="text-sm text-gray-300 mt-11">
            We care about the protection of your data. Read our{' '}
            <Link to="/privacy" className="text-white font-medium underline">
              Privacy Policy.
            </Link>
          </p>
        </section>
      </section>
    </article>
  );
}

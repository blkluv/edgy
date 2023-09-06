import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramCover from '../../assets/images/instagram-icon-cover.png';

export default function Hero() {
  const [submit, setSubmit] = useState(false);
  const ResetLocation = () => window.scrollTo(0, 0);

  return (
    <article className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <section className="mx-auto max-w-7xl lg:px-8">
        <section className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* CONTENT SECTION */}
          <section className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <section className="lg:py-24">
              <h1 className="mt-4 text-5xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Insta</span>
                <span className="block text-[color:var(--primary-font-color)]">
                  your Instagram AI AR partner
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Boost your popularity on Instagram with AI tech and AR filters that
                will skyrocket your profile engagement!
              </p>
              <section className="mt-10 sm:mt-12">
                <a
                  href="https://buy.stripe.com/6oE8xR5hR5zuby8dQQ" // Replace with your Stripe trial link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-0 sm:ml-3 block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-offset-gray-900"
                >
                  Start free trial
                </a>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                  Start your free 14-day trial, no credit card necessary. By providing
                  your email, you agree to our{' '}
                  <Link
                    to="/terms"
                    className="font-medium text-white"
                    onClick={ResetLocation}
                  >
                    terms of service
                  </Link>
                  .
                </p>
              </section>
            </section>
          </section>
          {/* IMAGE SECTION */}
          <section className="mt-12 -mb-16 md:-mb-48 lg:m-0 lg:relative">
            <img
              className="w-full lg:inset-y-0 lg:left-0 lg:w-90 lg:max-w-none opacity-60 object-cover"
              src={InstagramCover}
              alt=""
              aria-hidden="true"
            />
          </section>
        </section>
      </section>
    </article>
  );
}

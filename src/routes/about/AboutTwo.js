import { Link } from "react-router-dom";

export default function AboutTwo() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <section className="max-w-max lg:max-w-7xl mx-auto">
        <section className="relative z-10 mb-8 md:mb-2 md:px-6 ">
          <section className="text-base max-w-prose lg:max-w-none ">
            <h2 className="leading-6 text-[color:var(--primary-font-color)] font-semibold tracking-wide uppercase">
              Become an influencer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Get Instagram Followers Using The Latest Technology
            </p>
          </section>
        </section>
        <section className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <section className="relative md:bg-gray-900 md:p-6">
            <section className="lg:grid lg:grid-cols-2 lg:gap-6">
              <section className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <p>
                 Are you prepared to elevate your Instagram presence? Do you aspire to witness a remarkable surge in your follower numbers and engagement rates? Your search ends here! Within this post, we disclose the strategies for supercharging your Instagram expansion. Bid farewell to the challenges of acquiring followers and embrace our potent growth tactics that will guide you toward social media stardom.                </p>
                <p>
                  Before diving into our growth strategies, we shed light on the enigmatic Instagram algorithm. Delve into the inner workings of this algorithmic beast and learn how to work with it, not against it. By understanding the algorithm's preferences, you can position yourself for maximum exposure and enhanced visibility.
                </p>
                <p>
                In the world of Instagram leads, content holds the crown, with quality reigning as the ultimate ruler. We guide you in crafting visually remarkable and captivating content that enthralls your potential audience. From captivating visuals to compelling captions, we unveil the vital components that ignite curiosity and inspire potential followers to tap that 'Follow' icon.                </p>
              </section>
              <section className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <p>
                  Unlock the power of hashtags and trends to expand your reach beyond your current followers. We guide you on selecting the right hashtags and incorporating trending topics into your posts, ensuring your content reaches a broader audience.
                </p>
                <p>
                  Genuine engagement is the lifeblood of Instagram growth. We share invaluable tips on how to foster meaningful connections with your followers, turning them into brand ambassadors who enthusiastically spread the word about your account.
                </p>
                <p>
                  Discover the science behind optimal posting times. By posting strategically, you can reach your audience when they are most active, increasing the likelihood of higher engagement and follower acquisition.
                </p>
                <p>With our powerful growth strategies at your disposal, you hold the key to unlocking Instagram success. Embrace the potential of our tried-and-tested methods and watch as your follower count grows organically. It's time to supercharge your Instagram presence and become the social media sensation you've always envisioned. Get ready to witness the magic happen!</p>
              </section>
            </section>
            <section className="mt-8 inline-flex rounded-md shadow">
              <Link
                onClick={ResetLocation}
                to="https://instagram.com/arvrtise"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                DM us
              </Link>
            </section>
          </section>
        </section>
      </section>
    </article>
  )
}
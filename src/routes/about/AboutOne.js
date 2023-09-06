import EdgyIcon from "../../assets/images/edgy-icon.png";
import companyInformation from "../../data/companyInformation";

export default function AboutOne() {
  return (
    <article className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start max-w-7xl mx-auto">
      <section className="relative sm:py-16 lg:py-0">
        <section
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <section className="absolute inset-y-0 right-1/2 w-full bg-indigo-500 rounded-r-3xl lg:right-72 opacity-50" />
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
              height={392}
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </section>
        <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          {/* Testimonial card*/}
          <section className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://i.imgur.com/0dtbTuV.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              aria-hidden="true"
            />
            <section className="absolute inset-0 bg-indigo-500 mix-blend-multiply opacity-30" />
            <section className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
            <section className="relative px-8">
              <section>
                <img className="h-12" src={EdgyIcon} alt="Edgy" />
              </section>
              <blockquote className="mt-8">
                <section className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-[color:var(--primary-font-color)]"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                  Insta is for the culture of Instagram users; no one should be trying to circumvent AI algorithms without utilizing Arvrtise Insta AI technology.
                  </p>
                </section>
                <section className="mt-4">
                  <p className="text-base font-semibold text-indigo-200">
                    Dr.Candy Terry, Co-founder at Insta
                  </p>
                </section>
              </blockquote>
            </section>
          </section>
        </section>
      </section>

      <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">
            On a mission to empower creators
          </h2>
          <section className="mt-6 text-gray-500 space-y-6">
            <p className="text-base leading-7">
              Discover Insta, your all-inclusive destination for Instagram growth services! We're a team of enthusiastic and committed experts who recognize the significance of a robust online presence and its transformative effects on individuals and businesses. Our goal is to empower you to harness the full potential of your Instagram profile, propelling you towards greater achievements and influence in the digital realm.            </p>
            <p className="text-base leading-7">
              Here at Insta, we hold a steadfast conviction that Instagram transcends its role as a mere social media platform. It has evolved into a potent instrument for personal branding, fostering business growth, and facilitating community interaction. In our progressively digitized world, cultivating a strong Instagram presence stands as a pivotal element. It is essential for individuals aspiring to craft a personal brand and for enterprises aiming to broaden their outreach and establish meaningful connections with their intended audience.            </p>
            <p className="text-base leading-7">
              Our offerings are meticulously crafted to address the distinct requirements of individuals and businesses, regardless of where they currently stand on their Instagram voyage. Whether you're an up-and-coming influencer, a burgeoning startup, or a well-established brand, our customized solutions are poised to assist you in realizing your objectives.            </p>
          </section>
        </section>
        {/* Stats section */}
        <section className="mt-10">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
            {companyInformation.map((stat) => (
              <section
                key={stat.label}
                className="border-t-2 border-gray-100 pt-6"
              >
                <dt className="text-base font-medium text-gray-500">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </dd>
              </section>
            ))}
          </dl>
        </section>
      </section>
    </article>
  )
}
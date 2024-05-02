import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Essential",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$1000",
    description:
      "A great way to get started with your business, and see if it's a good fit for you.",
    features: [
      "Responsive website or high converting landing page",
      "Includes figma file and all assets",
      "Includes branding, SEO, and logo",
      "Secure hosting and support",
      " 1 brand with unlimited updates (one update at a time)",
      "Developed with Framer or Webflow",
      " Branding guidelines creation,",
    ],
  },
  {
    name: "Growth",
    id: "tier-team",
    href: "#",
    priceMonthly: "$2000",
    description:
      "Perfect for growing businesses that want to take their business to the next level.",
    features: [
      "Everything included in Essential package",
      "Option for fully responsive full stack site, built from scratch",
      " Including CMS and E-commerce",
      " Consistent health checks",
      "Craft blogs for website, with ability to craft monthly",
      " Includes social media management, with post creation and design",
    ],
  },
];

export default function Example() {
  return (
    <div className="isolate overflow-hidden ">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-3xl font-bold tracking-tight h-20 md:text-5xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
            Pricing plans for businesses of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <div className="relative mt-6">
          <p className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl ">
            Choose the plan that works best for your business.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#ECBE44" />
                <stop offset={1} stopColor="#2563EB" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root  pb-24 sm:pb-32">
        <img
          src="/images/scribbles/bolt.svg"
          alt="line"
          className="w-20 mx-auto absolute left-6 -translate-x-1/2 sm:mt-20 sm:w-40"
        />
        <img
          src="/images/scribbles/scribble.svg"
          alt="line"
          className="w-10 mx-auto mt-10 absolute right-6 -translate-x-9 sm:mt-20 sm:w-20"
        />
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-[#2563EB]"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7 text-gray-600">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-[#ECBE44]"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    // href={tier.href}
                    href="#contactus"
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-[#2563EB] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className=" flex flex-col items-start bg-slate-600 gap-x-8 gap-y-6 rounded-3xl p-8  sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <img
                  src="/images/scribbles/scribble2.svg"
                  alt="line"
                  className="w-10 mx-auto mt-10 absolute right-40 -translate-x-1/2 sm:mt-40 sm:w-10 rotate-90 overflow-hidden"
                />
                <div className="lg:min-w-0 lg:flex-1 ">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                    Flex Plan
                  </h3>
                  <p className="mt-1 text-base leading-7 text-white">
                    Custom pricing for businesses with unique needs, and large
                    goals to achieve. Get in touch with us to learn more.
                  </p>
                </div>
                <a
                  href="#contactus"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-200 hover:ring-[#ECBE44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Us<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              {/* <div className="bg-red-500 flex  justify-center px-6 rounded-md py-6 flex-col "> */}
              <div className="flex flex-col bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <img
                  src="/images/scribbles/scribble2.svg"
                  alt="line"
                  className="w-10 mx-auto mt-10 absolute left-6 -translate-x-1/2 sm:mt-20 sm:w-10 rotate-90"
                />
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                    Book an intro call
                  </h3>
                  <p className="mt-1 text-base leading-7 text-white">
                    Learn how VoltWebSolutions works for your business.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-200 hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book a call<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

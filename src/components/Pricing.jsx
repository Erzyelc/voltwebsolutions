// import { useState } from "react";
// import { RadioGroup } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";

// const frequencies = [
//   { value: "monthly", label: "Monthly", priceSuffix: "/month" },
//   { value: "annually", label: "Annually", priceSuffix: "/year" },
// ];
// const tiers = [
//   {
//     name: "Essential",
//     id: "tier-freelancer",
//     href: "#",
//     price: { monthly: "$1000", annually: "$11,000" },
//     description: "The essentials to provide you the best start.",
//     features: [
//       "5 products",
//       "Up to 1,000 subscribers",
//       "Basic analytics",
//       "48-hour support response time",
//     ],
//     mostPopular: false,
//   },
//   {
//     name: "Growth",
//     id: "tier-startup",
//     href: "#",
//     price: { monthly: "$2000", annually: "$22,000" },
//     description: "A plan that scales with your rapidly growing business.",
//     features: [
//       "25 products",
//       "Up to 10,000 subscribers",
//       "Advanced analytics",
//       "24-hour support response time",
//       "Marketing automations",
//     ],
//     mostPopular: true,
//   },
//   {
//     name: "Flex",
//     id: "tier-enterprise",
//     href: "#",
//     price: { monthly: "Prices Vary", annually: "Prices Vary" },
//     description: "Dedicated support and infrastructure for your company.",
//     features: [
//       "Unlimited products",
//       "Unlimited subscribers",
//       "Advanced analytics",
//       "1-hour, dedicated support response time",
//       "Marketing automations",
//       "Custom reporting tools",
//     ],
//     mostPopular: false,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Pricing() {
//   const [frequency, setFrequency] = useState(frequencies[0]);

//   return (
//     <div className=" py-24 sm:py-32" id="pricing">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl text-center ">
//           <p className="mt-2 text-3xl font-bold tracking-tight h-20 md:text-5xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
//             Pricing plans for businesses of&nbsp;all&nbsp;sizes
//           </p>
//         </div>
//         <p className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl ">
//           Choose the plan that works best for your business.
//         </p>
//         <div className="mt-16 flex justify-center">
//           <RadioGroup
//             value={frequency}
//             onChange={setFrequency}
//             className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 "
//           >
//             <RadioGroup.Label className="sr-only">
//               Payment frequency
//             </RadioGroup.Label>
//             {frequencies.map((option) => (
//               <RadioGroup.Option
//                 key={option.value}
//                 value={option}
//                 className={({ checked }) =>
//                   classNames(
//                     checked ? "bg-[#2563EB] text-white" : "bg-neutral-200",
//                     "cursor-pointer rounded-full px-2.5 py-1"
//                   )
//                 }
//               >
//                 <span>{option.label}</span>
//               </RadioGroup.Option>
//             ))}
//           </RadioGroup>
//         </div>
//         <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {tiers.map((tier) => (
//             <div
//               key={tier.id}
//               className={classNames(
//                 tier.mostPopular
//                   ? "bg-white/5 ring-2 ring-[#2563EB]"
//                   : "ring-1 ring-white/10",
//                 "rounded-3xl p-8 xl:p-10"
//               )}
//             >
//               <div className="flex items-center justify-between gap-x-4">
//                 <h3 id={tier.id} className="text-lg font-semibold leading-8 ">
//                   {tier.name}
//                 </h3>
//                 {tier.mostPopular ? (
//                   <p className="rounded-full bg-[#2563EB] px-2.5 py-1 text-xs font-semibold leading-5 ">
//                     Most popular
//                   </p>
//                 ) : null}
//               </div>
//               <p className="mt-4 text-sm leading-6 ">{tier.description}</p>
//               <p className="mt-6 flex items-baseline gap-x-1">
//                 <span className="text-4xl font-bold tracking-tight ">
//                   {tier.price[frequency.value]}
//                 </span>
//                 <span className="text-sm font-semibold leading-6 ">
//                   {frequency.priceSuffix}
//                 </span>
//               </p>
//               <a
//                 href={tier.href}
//                 aria-describedby={tier.id}
//                 className={classNames(
//                   tier.mostPopular
//                     ? "bg-[#2563EB]  shadow-md hover:bg-white focus-visible:outline-[#2563EB]"
//                     : "bg-neutral-400  hover:bg-white/20 focus-visible:outline-yellow-300",
//                   "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//                 )}
//               >
//                 Buy plan
//               </a>
//               <ul
//                 role="list"
//                 className="mt-8 space-y-3 text-sm leading-6  xl:mt-10"
//               >
//                 {tier.features.map((feature) => (
//                   <li key={feature} className="flex gap-x-3">
//                     <CheckIcon
//                       className="h-6 w-5 flex-none "
//                       aria-hidden="true"
//                     />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Essential",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$1000",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Growth",
    id: "tier-team",
    href: "#",
    priceMonthly: "$2000",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
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
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-[#2563EB] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className=" flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-white sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
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
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-200 hover:ring-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

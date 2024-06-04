import {
  // CloudArrowUpIcon,
  ArrowsRightLeftIcon,
  LockClosedIcon,
  BoltIcon,
  // ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="workflow"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          className="absolute  inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563EB]  to-[#ECBE44] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7">Deploy faster</p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight  md:text-5xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
                A better workflow
              </h1>

              <p className="mt-6 text-xl leading-8">
                At VWS, we're passionate about empowering brands to thrive in
                the digital landscape. With a dedicated team of experienced
                professionals, we specialize in crafting tailored web
                development solutions that propel businesses forward. Our
                mission is simple: to help brands grow exponentially by
                harnessing the power of innovative digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="images/projects/nextlevel.svg"
            // src="images/projects/landfree.svg"
            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7  lg:max-w-lg">
              <p>
                Our process begins with a comprehensive analysis of your brand's
                objectives and target audience, allowing us to develop
                customized strategies that drive growth and engagement. Whether
                you're a startup looking to establish your online presence or a
                seasoned enterprise seeking to optimize performance, we have the
                expertise and resources to elevate your brand to new heights.
              </p>
              <ul role="list" className="mt-8 space-y-8 ">
                <li className="flex gap-x-3">
                  <ArrowsRightLeftIcon
                    className="mt-1 h-5 w-5 flex-none"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">
                      Feedback Appreciated.
                    </strong>{" "}
                    We value your feedback and will work with you to ensure that
                    your website is exactly what you want.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none "
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">Security first.</strong>{" "}
                    We prioritize security in our development process to ensure
                    a safe and secure website for your business.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon
                    className="mt-1 h-5 w-5 flex-none "
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">
                      Fast and reliable.
                    </strong>{" "}
                    We use the latest technologies to ensure that your website
                    is fast and looks great on all devices.
                  </span>
                </li>
              </ul>
              <p className="mt-8"></p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Let us handle the hosting, so you can focus on your website. We
                will work directly with you to make sure your website is up and
                running as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

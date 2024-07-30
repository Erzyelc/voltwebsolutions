export default function Logos() {
  return (
    <div className="pt-24  sm:py-32 flex  flex-col items-center justify-center">
      {/* <h1 className=''>We have worked with some incredible brands</h1> */}

      <span className="text-md mt-2 px-2 pb-10 text-center font-poppins md:mt-4 md:px-5 md:text-xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
        We have worked with some incredible brands
      </span>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-neutral p-8 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              //   src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              src="/images/logo/noritz.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/logo/bw.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/logo/delta.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/logo/ge.svg"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/logo/jcc.svg"
              alt="SavvyCal"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-neutral p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

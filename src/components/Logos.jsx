export default function Logos() {
  return (
    <div className="pt-24  sm:py-32">
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

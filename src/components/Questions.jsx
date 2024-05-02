const faqs = [
  {
    id: 1,
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "The annual cost of a full-time designer can be quite high, especially for small businesses. With our service, you can get the same quality of work at a fraction of the cost. Plus, you can cancel anytime.",
  },
  {
    id: 1,
    question: "How fast will I receive my designs?",
    answer:
      "We aim to deliver your designs within 1-2 business days. However, the turnaround time may vary depending on the complexity of the design and the number of requests in the queue.",
  },
  {
    id: 1,
    question: "What programs do you design in?",
    answer:
      "We design in Adobe Illustrator, and figma. If you need your design in a different format, please let us know, and we’ll do our best to accommodate your request.",
  },
  {
    id: 1,
    question: "What if I don't like the design?",
    answer:
      "We offer unlimited revisions, so we’ll keep working on your design until you’re 100% satisfied. If you’re still not happy, we offer a 100% money-back guarantee.",
  },
  {
    id: 1,
    question: "What if I only have a single request?",
    answer:
      "We’re happy to help with a single request! You can sign up for a monthly plan and cancel anytime. We also offer a one-time design service if you only need a single design.",
  },
  {
    id: 1,
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Yes, we offer a 100% money-back guarantee if you’re not satisfied with our service. We want to make sure you’re happy with the designs you receive.",
  },
];

export default function Questions() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-center font-poppins text-3xl font-semibold md:text-4xl  bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
            Frequently asked questions
          </h1>
          <p className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="#contactus"
              className="font-semibold text-[#2563EB] hover:text-[#ECBE44]"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 ">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 ">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

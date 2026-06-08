import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are you partisan?",
      answer:
        "No. CiP does not endorse parties, candidates, or policies. We welcome Christians from across the political spectrum.",
    },
    {
      question: "How do you handle disagreement?",
      answer:
        "We celebrate it. Faithful Christians will disagree on policy — we model respectful, Christlike dialogue across those differences.",
    },
    {
      question: "Can you come to my church or uni?",
      answer:
        "Yes — and there's no cost. Use the contact form below and we'll work with you on dates and content.",
    },
    {
      question: "How do events work?",
      answer:
        "An engaging talk, a Q&A, and clear next steps — typically 60–90 minutes. Welcoming, thoughtful, and encouragement-focused.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-copper-600 mb-4">FAQs</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            Honest answers.
          </h2>
        </div>

        <div className="divide-y divide-charcoal-200 border-y border-charcoal-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors group"
              >
                <h3 className="font-semibold text-charcoal-900 text-lg group-hover:text-copper-600 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-copper-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 -mt-2">
                  <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors bg-white shadow-sm"
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
              <span className="text-gray-400 flex-shrink-0 bg-gray-50 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

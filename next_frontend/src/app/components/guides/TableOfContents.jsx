"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link 
              href={`#${section.id}`}
              className={`text-sm transition-colors duration-200 block ${
                activeId === section.id
                  ? "text-blue-600 font-medium border-l-2 border-blue-600 pl-3 -ml-[14px]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {section.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

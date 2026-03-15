import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGuideBySlug, getAllGuides } from "@/lib/data/guides";
import ReadingProgress from "../../components/guides/ReadingProgress";
import TableOfContents from "../../components/guides/TableOfContents";
import AuthorProfile from "../../components/guides/AuthorProfile";
import FAQSection from "../../components/guides/FAQSection";
import styles from "./Article.module.css";

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} | PathUp Guides`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.publishDate,
      authors: [guide.author.name],
      images: [
        {
          url: guide.featuredImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
  };
}

export default async function GuideArticlePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Generate Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    image: guide.featuredImage,
    datePublished: new Date(guide.publishDate).toISOString(),
    author: {
      "@type": "Person",
      name: guide.author.name,
      url: guide.author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "PathUp",
    },
    description: guide.description,
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      }
    }))
  };

  return (
    <>
      <ReadingProgress />
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {guide.faqs && guide.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="bg-white min-h-screen pt-12 pb-24 font-sans selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center mb-10">
          <Link href="/guides" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to All Guides
          </Link>
          <div className="flex justify-center items-center gap-2 mb-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{guide.category}</span>
            <span>•</span>
            <span>{new Date(guide.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>{guide.readingTime}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            {guide.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 lg:px-8 mb-16">
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10">
            <Image
              src={guide.featuredImage}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-5xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className={`${styles.prose} max-w-none`}>
              {guide.contentSections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">{section.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </section>
              ))}
            </div>

            <AuthorProfile author={guide.author} />
            <FAQSection faqs={guide.faqs} />
          </div>

          {/* Sidebar (ToC, Related Links) */}
          <aside className="lg:w-1/3 space-y-8">
            <TableOfContents sections={guide.contentSections} />

            {/* Internal Links: Related Courses */}
            {guide.relatedCourses && guide.relatedCourses.length > 0 && (
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Explore Careers
                </h3>
                <ul className="space-y-3">
                  {guide.relatedCourses.map(course => (
                    <li key={course.slug}>
                      <Link href={`/courses/${course.slug}`} className="block bg-white border border-blue-100 p-4 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-gray-800 font-semibold text-sm">
                        {course.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Internal Links: Related Colleges */}
            {guide.relatedColleges && guide.relatedColleges.length > 0 && (
              <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-sm font-bold text-purple-900 uppercase tracking-wider mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Top Institutions
                </h3>
                <ul className="space-y-3">
                  {guide.relatedColleges.map(college => (
                    <li key={college.slug}>
                      <Link href={`/colleges/${college.slug}`} className="block bg-white border border-purple-100 p-4 rounded-xl hover:border-purple-500 hover:shadow-md transition-all text-gray-800 font-semibold text-sm">
                        {college.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>
    </>
  );
}

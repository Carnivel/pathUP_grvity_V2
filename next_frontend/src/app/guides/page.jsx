import Link from "next/link";
import Image from "next/image";
import FeaturedGuides from "../components/guides/FeaturedGuides";
import { getAllGuides, getFeaturedGuides, getPopularGuides } from "@/lib/data/guides";
import styles from "./Guides.module.css";

export const metadata = {
  title: "Career & College Admission Guides | PathUp",
  description: "Expert advice on college admissions, courses, entrance exams, and career planning. Read our comprehensive guides to make informed decisions about your future.",
  openGraph: {
    title: "PathUp Guides: Your Blueprint to Success",
    description: "Expert advice on college admissions, courses, and career planning.",
    url: "https://pathup.com/guides",
    type: "website",
  },
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesLandingPage() {
  const allGuides = getAllGuides();
  const featuredGuides = getFeaturedGuides();
  const popularGuides = getPopularGuides();

  const categories = ["All", "Courses", "Career Advice", "College Admission", "Entrance Exams", "Scholarships"];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero Header */}
      <header className="bg-white border-b border-gray-200 py-16 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Knowledge Hub for <span className="text-blue-600">Students</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover in-depth articles, career roadmaps, and college admission strategies curated by educational experts.
          </p>
          
          {/* Quick Filter & Search UI Placeholder */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search guides, courses, or careers..." 
                className="w-full px-6 py-4 rounded-full border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-colors shadow-sm text-lg"
              />
              <button className="absolute right-3 top-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Featured Section */}
        <FeaturedGuides guides={featuredGuides} />

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat, i) => (
            <button key={i} className={`whitespace-nowrap px-5 py-2.5 rounded-full font-medium transition-all shadow-sm ${i === 0 ? 'bg-gray-900 text-white hover:bg-black' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Grid */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allGuides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ${styles.cardHover}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.featuredImage}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase">
                        {guide.category}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 text-xs">{guide.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2 leading-tight">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                      {guide.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        <Image src={guide.author.avatar} alt="Author" width={24} height={24} className="rounded-full" />
                        {guide.author.name}
                      </div>
                      <span className="text-gray-400 text-sm">{new Date(guide.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm">
                <button className="relative inline-flex items-center px-4 py-2 border border-blue-500 text-sm font-medium rounded-l-md text-blue-600 bg-white hover:bg-blue-50">Previous</button>
                <button className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">1</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-blue-500 text-sm font-medium text-blue-600 bg-blue-50">2</button>
                <button className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">3</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                  Trending Now
                </h3>
                <ul className="space-y-6">
                  {popularGuides.map((guide, idx) => (
                    <li key={guide.slug} className="group flex gap-4 items-start">
                      <span className="text-4xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
                      <div>
                        <Link href={`/guides/${guide.slug}`} className="text-base font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {guide.title}
                        </Link>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{guide.category}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 drop-shadow-lg"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Free Career Counselling</h3>
                <p className="mb-6 opacity-90 relative z-10 text-sm leading-relaxed">Confused about your career path? Talk to our experts and find the perfect course for you.</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full w-full hover:bg-gray-50 transition shadow-md relative z-10">
                  Book a Session
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

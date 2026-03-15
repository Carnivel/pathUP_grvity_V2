import Link from "next/link";
import Image from "next/image";

export default function FeaturedGuides({ guides }) {
  if (!guides || guides.length === 0) return null;

  const featured = guides[0];
  const others = guides.slice(1, 3);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Featured Guides</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Featured */}
        <Link href={`/guides/${featured.slug}`} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={featured.featuredImage}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {featured.category}
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span>{new Date(featured.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {featured.readingTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                {featured.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {featured.description}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Image src={featured.author.avatar} alt={featured.author.name} width={40} height={40} className="rounded-full border-2 border-white shadow-sm" />
              <span className="text-sm font-medium text-gray-900">{featured.author.name}</span>
            </div>
          </div>
        </Link>

        {/* Other Featured */}
        <div className="flex flex-col gap-6">
          {others.map(guide => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group flex flex-col sm:flex-row h-full sm:h-[48%] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300">
              <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto h-48 sm:h-full overflow-hidden">
                <Image
                  src={guide.featuredImage}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-full sm:w-3/5">
                <div className="mb-2">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  {guide.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 gap-3">
                  <span>{new Date(guide.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  <span>•</span>
                  <span>{guide.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

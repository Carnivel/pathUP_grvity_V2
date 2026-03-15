import Image from "next/image";

export default function AuthorProfile({ author }) {
  if (!author) return null;

  return (
    <div className="mt-12 mb-12 p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
      <div className="flex-shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-lg font-bold text-gray-900 mb-1">Written by {author.name}</h4>
        <p className="text-gray-600 text-base leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
}

export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required to generate a valid robots.txt with absolute sitemap reference.");
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

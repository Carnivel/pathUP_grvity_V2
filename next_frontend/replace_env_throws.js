const fs = require('fs');
const path = require('path');

const filesToFix = [
    'src/app/sitemap.js',
    'src/app/robots.js',
    'src/app/layout.js',
    'src/app/exams/[slug]/page.jsx',
    'src/app/courses/[slug]/page.jsx',
    'src/app/colleges/[slug]/page.jsx',
    'src/app/careers/[slug]/page.jsx'
];

const fallbackStr = "process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'))";

filesToFix.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');

        // Remove the block: if (!process.env.NEXT_PUBLIC_SITE_URL) { ... throw new Error ... }
        content = content.replace(/if\s*\(!process\.env\.NEXT_PUBLIC_SITE_URL\)\s*\{\s*throw\s*new\s*Error[^}]+\}\s*/g, '');
        content = content.replace(/if\s*\(!baseUrl\)\s*\{\s*throw\s*new\s*Error[^}]+\}\s*/g, '');
        content = content.replace(/if\s*\(!siteUrl\)\s*\{\s*throw\s*new\s*Error[^}]+\}\s*/g, '');

        // Replace const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        content = content.replace(/const\s+baseUrl\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL(?:;|(?![\s\S]))/g, `const baseUrl = ${fallbackStr};`);
        
        // Replace const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
        content = content.replace(/const\s+siteUrl\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL(?:;|(?![\s\S]))/g, `const siteUrl = ${fallbackStr};`);

        // Fix layout.js new URL(...) inside metadataBase
        content = content.replace(/new URL\(process\.env\.NEXT_PUBLIC_SITE_URL\)/g, `new URL(${fallbackStr})`);

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed ${file}`);
    }
});

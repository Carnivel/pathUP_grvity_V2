const fs = require('fs');

const files = [
  'c:/Users/anandhu/pathupu_test_antigravity/next_frontend/src/app/components/guides/TableOfContents.jsx',
  'c:/Users/anandhu/pathupu_test_antigravity/next_frontend/src/app/components/guides/FAQSection.jsx',
  'c:/Users/anandhu/pathupu_test_antigravity/next_frontend/src/app/components/guides/FeaturedGuides.jsx',
  'c:/Users/anandhu/pathupu_test_antigravity/next_frontend/src/app/guides/page.jsx',
  'c:/Users/anandhu/pathupu_test_antigravity/next_frontend/src/app/guides/[slug]/page.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\\`/g, '\`');
  content = content.replace(/\\\$/g, '$');
  fs.writeFileSync(f, content);
});
console.log("Fixed files!");

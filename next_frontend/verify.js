async function verify() {
    try {
        const res = await fetch('http://localhost:3000/colleges/c');
        const html = await res.text();

        console.log("=== SEO METADATA VERIFICATION ===");

        const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i) || html.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"[^>]*>/i);
        console.log('Canonical:', canonical ? canonical[1] : 'Not found');

        const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i);
        console.log('Description:', desc ? desc[1] : 'Not found');

        const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i);
        console.log('OG Title:', ogTitle ? ogTitle[1] : 'Not found');

        const jsonld = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([^<]*)<\/script>/i);
        if (jsonld) {
            console.log('\nJSON-LD Data:', JSON.parse(jsonld[1].trim()));
        } else {
            console.log('\nJSON-LD: Not found');
        }

    } catch (e) {
        console.error(e);
    }
}

verify();

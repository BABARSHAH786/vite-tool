export async function generateStaticParams() {
    const query = `*[_type=='product']{ "slug": slug.current }`;
    const slugs = await client.fetch(query);
  
    return slugs.map((item) => ({ slug: item.slug }));
  }
  
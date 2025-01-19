import { client } from "@/sanity/lib/client";
import SecEnd from "./components/SectionEnd";
import SecMid from "./components/SectionMid";
import SecTop from "./components/SectionTop";
import BlogCard from "./components/BlogCard";



// gem
export default async function Home() {
  const query = `*[_type=='product'] | order(_createdAt asc){
    productName, price, image, color, category, slug
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.productName || post._id} />
        ))}
      </section>
      {/* 
    <SecTop />
    <SecMid />
    <SecEnd /> */}
    </div>
  );
}


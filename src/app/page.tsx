import { client } from "@/sanity/lib/client";
// import SecEnd from "./components/SectionEnd";
// import SecMid from "./components/SectionMid";

// import ProductList from "@/copmnent/ProductList";
import IProduct from "@/types/product";
import AddtoCartt from "@/copmnent/Zcart";
import SecTop from "./components/SectionTop";





// https://www.youtube.com/watch?v=PhciU8SQ8hs user uth video for dashboard
// gem
export default async function Home() {

  // fetch data
  const query = `*[_type=='product'] | order(_createdAt asc){
    productName, price, image, color, category,status,
    "slug": slug.current    
  }`;

  const posts: Post[] = await client.fetch(query);
  // add to cart
  const response = await fetch('https://template-03-api.vercel.app/api/products');
    // const products =await response.json();
  
  
  const products: IProduct[] = await response.json();
  console.log(products);


  return (
    <div>
      <SecTop />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          // <BlogCard post={post} key={post.productName || post._id} />
          <AddtoCartt post={post} key={post.productName || post._id} />
        ))}
             {/* <ProductList products={products} /> */}

      </section>
  

     {/* add to cart */}

      {/* 
    <SecTop />
    <SecMid />
    <SecEnd /> */}
    </div>
  );
}





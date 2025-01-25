import { client } from "@/sanity/lib/client";
// import SecEnd from "./components/SectionEnd";
// import SecMid from "./components/SectionMid";
// import SecTop from "./components/SectionTop";

// import ProductList from "@/copmnent/ProductList";
import IProduct from "@/types/product";
import AddtoCartt from "@/copmnent/Zcart";





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




// sir abdullah
// import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";

// export default async function Home() {
//   const data = await client.fetch(`*[_type == "product"] {
//     _id,
//   productName,
//   productPrice,
//   "slug": slug.current, 
//   "imageUrl": productImage[0].asset->url
  
// }`);

//   // console.log(data);
//   return (
//     <div className="flex justify-evenly mt-10"> 
//       {data.map((item: any) => {
//         return (
//           <Link href={`products/${item.slug}`} key={item._id} className="shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
//             {/* <Image
//               // src={item.imageUrl}
//               src={urlForImage(item.image)}

//               alt={item.productName}
//               height={250}
//               width={250}
//               className="max-h-72 object-cover rounded mt-2"
//             /> */}
//             <span className="flex my-3 justify-between items-center text-xl font-bold text-gray-700">
//               <h1 className="max-w-40">{item.productName}</h1>
//               <p className="">${item.productPrice}</p>
//             </span>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-400">Add to Cart</button>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
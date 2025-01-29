// // 'use client';
// // import Image from "next/image";
// // import Link from "next/link";
// // import { urlForImage } from "../sanity/lib/image";
// // import IProduct from "@/types/product";

// // export default function AddtoCartt({post}:{post:Post}) {
// //   // add to cart start
// //   const handleClick = (product: IProduct) => {
// //     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
// //     if (cart[product.name]) {
// //       cart[product.name] = {
// //         ...cart[product.name],
// //         quantity: cart[product.name].quantity + 1,
// //       };
// //     } else {
// //       cart[product.name] = { ...product, quantity: 1 };
// //     }

// //     localStorage.setItem('cart', JSON.stringify(cart));
// //   };

// //   // add to cart end
// //   return (
// //     <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
// //       {/* Image Section*/}
// //       <div key={post._id} className="relative max-h-76 flex-1">
// //         <Image
// //           src={urlForImage(post.image)}
// //           alt="AI for everyone"
// //           width={500}
// //           height={500}
// //           // fill
// //           className="object-cover rounded-t"
// //         />
// //       </div>
// //       {/* <p>{post.image} </p> */}

// //       {/* Title and Summary */}
// //       <div className="flex flex-col justify-between gapx-y-4  p-4">
// //         <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
// //               <p>{post.productName} </p>

// //         <p>{post.status} </p>

// //           {post.category}
// //         </h2>

// //         <p>{post.colors} </p>
// //         <p className="w-[374px]  leading-[28px] text-[24px]  mt-6 ">{post.price}
// // </p>

// //         {/* <Link
// //        */}
// //         {/* <Link href="/blog/[slug]">Product Details</Link> */}
// //         <Link
// //           href={`/blog/${post.slug}`}
// //           className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
// //         >
// //           Product Detail
// //         </Link>
// //         <p>check</p>
// //         <button
// //               onClick={() => handleClick(product)}
// //               // hndler me vlue pass karnay k liye arrow fnc banegy
// //               className='p-3 border rounded'
// //             >
// //               Add to Cart
// //             </button>

// //       </div>
// //     </section>
// //   );
// // }

// // // 'use client';
// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { urlForImage } from '../sanity/lib/image';
// // // import IProduct from '@/types/product';

// // // export default function BlogCard({ post }: { post: Post }) {
// // //   // Add to cart handler
// // //   const handleClick = (product: IProduct) => {
// // //     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
// // //     if (cart[product.name]) {
// // //       cart[product.name] = {
// // //         ...cart[product.name],
// // //         quantity: cart[product.name].quantity + 1,
// // //       };
// // //     } else {
// // //       cart[product.name] = { ...product, quantity: 1 };
// // //     }

// // //     localStorage.setItem('cart', JSON.stringify(cart));
// // //   };

// // //   return (
// // //     <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
// // //       {/* Image Section */}
// // //       <div key={post._id} className="relative max-h-76 flex-1">
// // //         <Image
// // //           src={urlForImage(post.image)}
// // //           alt={post.productName || 'Product'}
// // //           width={500}
// // //           height={500}
// // //           className="object-cover rounded-t"
// // //         />
// // //       </div>

// // //       {/* Title and Summary */}
// // //       <div className="flex flex-col justify-between gapx-y-4 p-4">
// // //         <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
// // //           <p>{post.productName}</p>
// // //           <p>{post.status}</p>
// // //           {post.category}
// // //         </h2>

// // //         <p>{post.colors}</p>
// // //         <p className="w-[374px] leading-[28px] text-[24px] mt-6">{post.price}</p>

// // //         <Link
// // //           href={`/blog/${post.slug}`}
// // //           className="block px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
// // //         >
// // //           Product Detail
// // //         </Link>

// // //         {/* Add to Cart Button */}
// // //         <button
// // //           onClick={() =>
// // //             handleClick({
// // //               name: post.productName,
// // //               category: post.category,
// // //               price: parseFloat(post.price), // Convert price to number
// // //               originalPrice: post.originalPrice ? parseFloat(post.originalPrice) : parseFloat(post.price),
// // //               image: urlForImage(post.image),
// // //             })
// // //           }
// // //           className="p-3 border rounded"
// // //         >
// // //           Add to Cart
// // //         </button>
// // //       </div>
// // //     </section>
// // //   );
// // // }

"use client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../sanity/lib/image";

export default function AddtoCartt({ post }) {
  const handleClick = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[product.name]) {
      cart[product.name] = {
        ...cart[product.name],
        quantity: cart[product.name].quantity + 1,
      };
    } else {
      cart[product.name] = { ...product, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <section key={post._id} className="ml-2 w-[900px] flex flex-col ...">
      {" "}
      {/* ... rest of your JSX */}
      <Image
        src={urlForImage(post.image)}
        alt="AI for everyone"
        width={350}
        height={350}
        // fill
        className="object-cover rounded-t"
      />
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          <p>{post.productName} </p>
          </h2>


          <p>{post.status} </p>

          {post.category}
          <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
        >
          Product Detail
        </Link>

        <p>{post.colors} </p>
      </div>
      
      {/* add to cart work */}
            <button
        onClick={() => {
          const productToAdd = {
            name: post.productName,
            category: post.category,
            price: parseFloat(post.price),
            originalPrice: post.originalPrice
              ? parseFloat(post.originalPrice)
              : parseFloat(post.price),
            image: urlForImage(post.image),
            // Add other necessary properties of IProduct if any
          };
          handleClick(productToAdd);
        }}
        className="p-3 border rounded    "
      >
        Add to Cart
      </button>

    </section>
  );
}




// new unique id erroe solved success
// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { urlForImage } from "../sanity/lib/image";
// import { v4 as uuidv4 } from 'uuid';

// export default function AddToCartt({ post }) { // Removed TypeScript type
//     const handleClick = (product) => { // Removed TypeScript type
//         const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//         if (cart[product.id]) {
//             cart[product.id] = {
//                 ...cart[product.id],
//                 quantity: cart[product.id].quantity + 1,
//             };
//         } else {
//             cart[product.id] = { ...product, quantity: 1 };
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));
//     };

//     return (
//         <section key={post._id} className="flex flex-col ...">
//             <Image
//                 src={urlForImage(post.image)}
//                 alt={post.productName || 'Product'}
//                 width={500}
//                 height={500}
//                 className="object-cover rounded-t"
//             />
//             <div className="flex flex-col justify-between gapx-y-4 p-4">
//                 <h2 className="text-lg font-semibold line-clamp-2 ...">
//                     <p>{post.productName}</p>
//                 </h2>
//                 <p>{post.status}</p>
//                 {post.category}
//                 <p>{post.colors}</p>
//                 <p className="w-[374px] ...">{post.price}</p>
//             </div>
//             <Link
//                 href={`/blog/${post.slug}`}
//                 className="block px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
//             >
//                 Product Detail
//             </Link>
//             <button
//                 onClick={() => {
//                     const productToAdd = {
//                         id: post._id || uuidv4(),
//                         name: post.productName,
//                         category: post.category,
//                         price: parseFloat(post.price),
//                         originalPrice: post.originalPrice ? parseFloat(post.originalPrice) : parseFloat(post.price),
//                         image: urlForImage(post.image),
//                     };
//                     handleClick(productToAdd);
//                 }}
//                 className="p-3 border rounded"
//             >
//                 Add to Cart
//             </button>
//         </section>
//     );
// }

// // Example usage in a parent component (ProductList):
// export function ProductList({ posts }) { // Removed TypeScript type
//     return (
//         <div className="product-list">
//             {posts.map((post) => (
//                 <AddToCartt key={post._id} post={post} />
//             ))}
//         </div>
//     );
// }
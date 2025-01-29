
// // convert into jvascript


// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// // import { PortableText } from "@portabletext/react";

// export const revalidate = 5;

// export async function generateStaticParams() {
//   const query = `*[_type=='product']{
//     "slug": slug.current
//   }`;

//   // Fetch slugs without TypeScript typing
//   const slugs = await client.fetch(query);

//   // Ensure slugs map correctly to the structure { slug: string }
//   return slugs.map((item) => ({ slug: item.slug }));
// }

// export default async function Page({ params }) {
//   const { slug } = params; // Extract slug safely

//   const query = `*[_type=='product' && "slug".slug.current=="${slug}"]{
//     title, summary, image, content
//   }[0]`;

//   try {
//     const post = await client.fetch(query);

//     if (!post) {
//       return <div>Post not found</div>; // Handle cases where the post doesn't exist
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         <Image
//           src={urlForImage(post.image)}
//           width={450}
//           height={450}
//           alt={post.title || "Post Image"} // Add alt text
//           className="rounded"
//         />

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           {/* <PortableText value={post.content} /> */}
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; // Handle fetch errors
//   }
// }


//slug isse solved congrtz
'use client'
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const revalidate = 5;

// original export 
// export async function generateStaticParams() {
//   // const query = `*[_type=='product']{
//   //   productName
//   // "slug": slug.current,
//   // slug.current

//   // }`;
//   const query = `*[_type=='product']{
//     "slug": slug.current,
//   }`;

//   // Fetch slugs without TypeScript typing
//   const slugs = await client.fetch(query);

//   // Ensure slugs map correctly to the structure { slug: string }
//   return slugs.map((item) => ({ slug: item.slug }));
// }

// export async function generateStaticParams() {
//   return{
//     props:{
//       productName:'New products'
//     }
//   }
// }



// check official nextjs docs*********************************************************
// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await fetch('').then((res) => res.json())
 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`




export default async function Page({ params }) {
  const { slug } = params; // Extract slug safely

  const query = `*[_type=='product' && slug.current=="${slug}"]{
    title, summary, image, content,description,productName, price, color, category,status,
    "slug": slug.current

  }[0]`;

  try {
    const post = await client.fetch(query);

    if (!post) {
      return <div>Post not found</div>; // Handle cases where the post doesn't exist
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        <Image
          src={urlForImage(post.image)}
          width={450}
          height={450}
          alt={post.title || "Post Image"} // Add alt text
          className="rounded"
        />

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.description}
          </p>
          <p className="font-bold text-xl "> Discounted rate: {post.price}</p>
        </section>

        <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
          <Link className="w-[210px] h-4 bg-black text-white rounded-[12px]" href="/cart">
          <button className="font-bold text-[19px] w-[210px] h-[25px] ">Add to Cart</button>
          </Link>
          <PortableText value={post.content} />
        </section>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>; // Handle fetch errors
  }
}


// check type error output
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import Link from "next/link";

// export const revalidate = 5;

// export async function generateStaticParams() {
//   const query = `*[_type=='product']{ "slug": slug.current }`;
//   const slugs = await client.fetch(query);

//   if (!slugs || slugs.length === 0) {
//     console.warn("No slugs found");
//     return [];
//   }

//   return slugs.map((item) => ({ slug: item.slug }));
// }

// export default async function Page({ params }) {
//   const { slug } = params;

//   if (!slug) {
//     console.error("Slug is missing");
//     return <div>Error: Missing slug</div>;
//   }

//   const query = `*[_type=='product' && slug.current==$slug]{
//     title, summary, image, content, description, productName, price, color, category, status,
//     "slug": slug.current
//   }[0]`;

//   try {
//     const post = await client.fetch(query, { slug });

//     if (!post) {
//       return <div>Product not found</div>;
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         <Image
//           src={urlForImage(post.image)}
//           width={450}
//           height={450}
//           alt={post.title || "Post Image"}
//           className="rounded"
//         />

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.description}
//           </p>
//           <p className="font-bold text-xl ">Discounted rate: {post.price}</p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <Link className="w-[210px] h-4 bg-black text-white rounded-[12px]" href="/cart">
//             <button className="font-bold text-[19px] w-[210px] h-[25px]">Add to Cart</button>
//           </Link>
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading product. Please try again later.</div>;
//   }
// }


// server action not supported with static expport



// deploy generatestatic output
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import Link from "next/link";

// export const revalidate = 5; // Set revalidation interval for ISR

// // Function to generate static paths for dynamic routes
// export async function generateStaticParams() {
//   const query = `*[_type == "product"] {
//     "slug": slug.current
//   }`;

//   // Fetch slugs from Sanity
//   const slugs = await client.fetch(query);

//   // Ensure slugs are mapped correctly to the expected structure
//   return slugs.map((item) => ({ params: { slug: item.slug.current } }));
// }

// export default async function Page({ params }) {
//   const { slug } = params; // Extract slug safely

//   const query = `*[_type == "product" && slug.current == "${slug}"] {
//     title, summary, image, content, description, productName, price, color, category, status,
//     "slug": slug.current
//   }[0]`;

//   try {
//     const post = await client.fetch(query);

//     if (!post) {
//       return <div>Post not found</div>; // Handle cases where the post doesn't exist
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         <Image
//           src={urlForImage(post.image)}
//           width={450}
//           height={450}
//           alt={post.title || "Post Image"} // Add alt text
//           className="rounded"
//         />

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.description}
//           </p>
//           <p className="font-bold text-xl "> Discounted rate: {post.price}</p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <Link className="w-[210px] h-4 bg-black text-white rounded-[12px]" href="/cart">
//             <button className="font-bold text-[19px] w-[210px] h-[25px] ">Add to Cart</button>
//           </Link>
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; // Handle fetch errors
//   }
// }







// hammad

// import { urlForImage } from '@/sanity/lib/image'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'


// const Hero = ({data}) => {
//   return (
//     <div >
//         <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//           {/* <img
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src= {urlForImage(data.image).url()}
//             alt = "blog"
//           /> */}
//           <div className="p-6">
           
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//               {data.Image}
//             </h1>
//             <p className="leading-relaxed mb-3">
//               {data.Paragraph}
//             </p>
//             <div className="flex items-center flex-wrap ">
//               <Link href={`blog/${data.slug}`}  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//                 Learn More
//                 <svg
//                   className="w-4 h-4 ml-2"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M5 12h14" />
//                   <path d="M12 5l7 7-7 7" />
//                 </svg>
//               </Link>
              
//             </div>
//           </div>
//           Host
//         </div>
//       </div>
//       </div>
//       </div>
     
// </section>


//     </div>
//   )
// }

// export default Hero



// check gemini
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";

// export const revalidate = 5; // Set revalidation interval for ISR

// // Function to generate static paths for dynamic routes
// export async function generateStaticParams() {
//   const query = `*[_type=='product']{
//     "slug": slug.current
//   }`;

//   try {
//     // Fetch slugs from Sanity
//     const slugs = await client.fetch(query);

//     // Ensure slugs are mapped correctly to the expected structure
//     return slugs
//       .filter((item) => typeof item.slug === "string") // Validate slugs are strings
//       .map((item) => ({ slug: item.slug })); // Map to the required format
//   } catch (error) {
//     console.error("Error fetching slugs:", error);
//     return []; // Return an empty array on failure to avoid breaking the build
//   }
// }

// // Page component to display a specific blog post
// export default async function Page({ params }) {
//   const { slug } = params; // Safely extract slug from params

//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, summary, image, content
//   }[0]`; // Fetch the post matching the slug

//   try {
//     const post = await client.fetch(query); // Fetch post data

//     // Handle case when the post does not exist
//     if (!post) {
//       return <div>Post not found</div>;
//     }

//     // Render the post content
//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {/* Display the image */}
//         {post.image && (
//           <Image
//             src={urlForImage(post.image).url()} // Ensure image URL is generated properly
//             width={450}
//             height={450}
//             alt={post.title || "Post Image"} // Provide alt text
//             className="rounded"
//           />
//         )}

//         {/* Display the summary */}
//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         {/* Display the content */}
//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           {/* Uncomment this if using PortableText */}
//           {/* <PortableText value={post.content} /> */}
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; // Show error message if the fetch fails
//   }
// }




// agin gem
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// export const revalidate = 5; // Set revalidation interval for ISR

// export async function generateStaticParams() {
//   const query = `*[_type == "product"] {
//     "slug": slug.current
//   }`;

//   try {
//     const slugs = await client.fetch(query);

//     return slugs
//       .filter((post) => typeof post.slug.current === "string") 
//       .map((post) => ({ params: { slug: post.slug.current } })); 
//   } catch (error) {
//     console.error("Error fetching slugs:", error);
//     return []; // Return an empty array on failure to avoid breaking the build
//   }
// }

// export default async function Page({ params }) {
//   const { slug } = params;

//   const query = `*[_type == "product" && slug.current == "${slug}"]{
//     title, summary, image, content
//   }[0]`;

//   try {
//     const post = await client.fetch(query);

//     if (!post) {
//       return <div>Post not found</div>; 
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {post.image && (
//           <Image
//             src={urlForImage(post.image).url()} 
//             width={450}
//             height={450}
//             alt={post.title || "Post Image"}
//             className="rounded"
//           />
//         )}

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; 
//   }
// }
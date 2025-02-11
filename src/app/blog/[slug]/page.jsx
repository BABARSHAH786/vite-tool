// resolve server ctions
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
// import AddtoCartFunctionality from "@/app/components/CartAddclient";
// import AddtoCartFunc from "@/app/components/CartAddclient";
import AddtoCartt from "@/copmnent/Zcart";

// ✅ Function to fetch a single post at build time
async function getPost(slug) {
  const query = `*[_type=='product' && slug.current==$slug]{
    title, summary, image, content, description, productName, price, color, category, status,
    "slug": slug.current
  }[0]`;

  return client.fetch(query, { slug });
}

// ✅ Generate Static Params (to pre-build all pages)
export async function generateStaticParams() {
  const query = `*[_type=='product']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);

  return slugs.map((item) => ({ slug: item.slug }));
}

// ✅ Convert Page into a static component
export default async function Page({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
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
        alt={post.title || "Post Image"}
        className="rounded"
      />

      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.description}
        </p>
        <p className="font-bold text-xl ">Discounted rate: {post.price}</p>
      </section>

      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        {/* <Link href="/cart">
          <button className="font-bold text-[19px] w-[210px] h-[25px] bg-black text-white rounded-[12px]">
            Add to Cart

          </button>
        </Link> */}

        <Link href="/cart">
        </Link>

          {/* <AddtoCartFunc post={post} key={post.productName || post._id} /> */}
          <AddtoCartt post={post} key={post.productName || post._id} />


        <PortableText value={post.content} />
      </section>
    </article>
  );
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

//slug isse solved congrtz
// 'use client'
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import Link from "next/link";

// export const revalidate = 5;

// // original export
// // export async function generateStaticParams() {
// //   // const query = `*[_type=='product']{
// //   //   productName
// //   // "slug": slug.current,
// //   // slug.current

// //   // }`;
// //   const query = `*[_type=='product']{
// //     "slug": slug.current,
// //   }`;

// //   // Fetch slugs without TypeScript typing
// //   const slugs = await client.fetch(query);

// //   // Ensure slugs map correctly to the structure { slug: string }
// //   return slugs.map((item) => ({ slug: item.slug }));
// // }

// // export async function generateStaticParams() {
// //   return{
// //     props:{
// //       productName:'New products'
// //     }
// //   }
// // }

// // check official nextjs docs*********************************************************
// // Return a list of `params` to populate the [slug] dynamic segment
// // export async function generateStaticParams() {
// //   const posts = await fetch('').then((res) => res.json())

// //   return posts.map((post) => ({
// //     slug: post.slug,
// //   }))
// // }

// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`

// export default async function Page({ params }) {
//   const { slug } = params; // Extract slug safely

//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, summary, image, content,description,productName, price, color, category,status,
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
//           <button className="font-bold text-[19px] w-[210px] h-[25px] ">Add to Cart</button>
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

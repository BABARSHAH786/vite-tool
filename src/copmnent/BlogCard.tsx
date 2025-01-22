import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../sanity/lib/image";

export default function BlogCard({post}:{post:Post}) {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlForImage(post.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
        <p>{post.status} </p>

          {post.category}
        </h2>
       
        <p>{post.productName} </p>

        <p>{post.colors} </p>
        <p className="w-[374px]  leading-[28px] text-[24px]  mt-6 ">{post.price}
</p>

        
        {/* <Link
       */}
        <Link href="/blog/[slug]?slug=1">Product Details</Link>
      </div>
    </section>
  );
}

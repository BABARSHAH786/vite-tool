// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { urlForImage } from "../../sanity/lib/image";


// export default function AddtoCartt({ }) {
//   const handleClick = (product: { name: any; category?: any; price?: number; originalPrice?: number; image?: string; }) => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//     if (cart[product.name]) {
//       cart[product.name] = {
//         ...cart[product.name],
//         quantity: cart[product.name].quantity + 1,
//       };
//     } else {
//       cart[product.name] = { ...product, quantity: 1 };
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//   };

//   return (
//     <section  className="ml-2 w-[900px] flex flex-col ...">
//       {" "}
      
     
      
//       {/* add to cart work */}
//             <button
//                     className="p-3 border rounded bg-red-600   "

//         onClick={() => {
//           const productToAdd = {
//             name: post.productName,
//             category: post.category,
//             price: parseFloat(post.price),
//             originalPrice: post.originalPrice
//               ? parseFloat(post.originalPrice)
//               : parseFloat(post.price),
//             image: urlForImage(post.image),
//             // Add other necessary properties of IProduct if any
//           };
//           handleClick(productToAdd);
//         }}
//       >
//          Add to Cart
//       </button>

//     </section>
//   );
// }




//original deploy code working build error
"use client";
// import Image from "next/image";
// import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";



export default function AddtoCartFunc({ post }) {  // Type the post prop if possible

  const handleClick = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const productId = product._id; // Use the product ID as the key

    if (cart[productId]) {
      cart[productId] = {
        ...cart[productId],
        quantity: cart[productId].quantity + 1,
      };
    } else {
      cart[productId] = { ...product, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    const price = parseFloat(post.price);
    const originalPrice = post.originalPrice ? parseFloat(post.originalPrice) : price;

    if (isNaN(price) || isNaN(originalPrice)) {
      console.error("Invalid price or originalPrice:", post.price, post.originalPrice);
      return;
    }

    const productToAdd = {
      productName: post.productName,
      category: post.category,
      price: parseFloat(post.price),

      originalPrice: originalPrice,
      image: urlForImage(post.image) , // Type assertion if needed
      _id: post._id, // Assuming post has a unique ID
    };

    handleClick(productToAdd);
  };

  return (
    <section key={post.productName} className="ml-2 w-[900px] flex flex-col">
      <button 
        className="p-3 border rounded bg-red-600 hover:bg-red-700 text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </section>
  );
}












// "use client";

// import { useEffect, useState } from "react";
// import { urlForImage } from "../../sanity/lib/image";

// interface Product {
//   productName: string;
//   category?: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   _id: string;
// }

// export default function AddToCartFunc({ post }: { post: Product }) {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // Ensure this code runs only on the client side
//     setIsClient(true);
//   }, []);

//   const handleClick = (product: Product) => {
//     if (!isClient) return;

//     // Retrieve the cart from localStorage or initialize an empty object
//     const cart = JSON.parse(localStorage.getItem("cart") || "{}");
//     const productId = product._id;

//     if (cart[productId]) {
//       // If the product already exists in the cart, increment its quantity
//       cart[productId] = {
//         ...cart[productId],
//         quantity: cart[productId].quantity + 1,
//       };
//     } else {
//       // If the product doesn't exist in the cart, add it with a quantity of 1
//       cart[productId] = { ...product, quantity: 1 };
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));
//   };

//   const handleAddToCart = () => {
//     if (!post || post.price === undefined || post._id === undefined) {
//       console.error("Post, post.price, or post._id is undefined");
//       return;
//     }

//     const price = post.price;
//     const originalPrice = post.originalPrice || price;

//     const productToAdd: Product = {
//       productName: post.productName,
//       category: post.category,
//       price: price,
//       originalPrice: originalPrice,
//     //   image: urlForImage(post.image) as string,
//       _id: post._id,
//     };

//     handleClick(productToAdd);
//   };

//   return (
//     <section className="ml-2 w-[900px] flex flex-col">
//       <button
//         className="p-3 border rounded bg-red-600 hover:bg-red-700 text-white"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </section>
//   );
// }

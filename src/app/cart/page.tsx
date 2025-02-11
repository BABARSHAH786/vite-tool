

// delete btn
"use client";
import IProduct from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // Fetch products from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IProduct[];
    setProducts(items);
  }, []);

  // Handle Quantity Increment
  const handleIncrement = (name: string) => {
    const updatedProducts = products.map((product) =>
      product.name === name
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    );
    setProducts(updatedProducts);
    updateCartInLocalStorage(updatedProducts);
  };

  // Handle Quantity Decrement
  const handleDecrement = (name: string) => {
    const updatedProducts = products.map((product) =>
      product.name === name && (product.quantity || 1) > 1
        ? { ...product, quantity: (product.quantity || 1) - 1 }
        : product
    );
    setProducts(updatedProducts);
    updateCartInLocalStorage(updatedProducts);
  };

  // Handle Delete Product
  const handleDelete = (name: string) => {
    const updatedProducts = products.filter((product) => product.name !== name);
    setProducts(updatedProducts);
    updateCartInLocalStorage(updatedProducts);
  };

  // Update Cart in LocalStorage
  const updateCartInLocalStorage = (updatedProducts: IProduct[]) => {
    const cart: { [key: string]: IProduct } = {};
    updatedProducts.forEach((product) => {
      cart[product.name] = product;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Display "Cart is Empty" Message
  if (products.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="flex flex-col gap-2 mb-3">
      {products.map((product) => (
        <div className="flex gap-6 mt-3 items-center" key={product.name}>
          {/* Product Image */}
          <Image
            src={product.image}
            alt={`Image of ${product.name}`}
            width={300}
            height={300}
          />

          {/* Product Details */}
          <div className="grid">
            <p className="text-3xl">{product.name}</p>
            <p className="text-xl">Quantity: {product.quantity || 1}</p>
            <p>Total: ${(product.quantity || 1) * product.price}</p>

            {/* Increment and Decrement Buttons */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleDecrement(product.name)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                -
              </button>
              <button
                onClick={() => handleIncrement(product.name)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                +
              </button>
                {/* Delete Button */}
          <button 
            onClick={() => handleDelete(product.name)}
            className="ml-[130px] px-4 py-2 bg-gray-800 text-white rounded"
          >
          <FaTrash />
          Delete
          </button>
            </div>
          </div>

        

        </div>
      ))}
    </div>
  );
}


// auth cler work
// //use this server side
// import { auth, currentUser } from "@clerk/nextjs/server";
 
// export default async function Auths(){
//     // const authentication = await auth()
//     const users =await currentUser()
//     const metadata = user?.publicmetadata 
//     if(metadata?.acess)
//     console.log(users);
    
//     // console.log(authentication);

    

//     return(
//         <>
// </>
//     )
// }





// // templte 3 cart
// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaHeart, FaTrash } from "react-icons/fa";
// // export default function Cart() {
// //   return (
// //     <div className="max-ss:w-[410px] max-ss:grid w-[1440px ]  flex ">
// //       <div className="max-ss:ml-2 ml-10 w-[1100px ] h-[485px] mt-10 ml-[155px]  ">
// //         <div className="max-ss:grid h-[547px ] flex ">
// //           <div className="w-[733px] h-[547px ] text-[23px] ">
// //             <div className="max-ss:w-[410px] w-[681px] h-[62px ] bg-[#F7F7F7] ">
// //               <p className="text-[34px] " >Free Delivery</p>
// //               <span>Applies to orders of ₹ 14 000.00 or more.</span>
// //               <span>View details</span>
// //             </div>
// //             <h4 className="mt-1">Bag</h4>

// //            <div className="flex mt-1">
// //           <Image
// //             className=""
// //             src={"/Frame (2).png"}
// //             alt="shoes"
// //             width={150}
// //             height={150}
// //           />
// //           <div className="ml-5 text-[15px]">
// //             <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra       <b className="font-semibold ml-[178px]">MRP: ₹ 3 895.00</b></p>
// //             <div className="text-[#757575] ">            <p>Men&apos;s Short-Sleeve Running Top</p>
// //             <p>Ashen Slate/Cobalt Bliss</p>
// //             <span>Size</span>
// //             <span>L</span>
// //             <span>Quantity</span>
// //             <span>1</span>
// //             </div>

// //             <span className="flex mt-2">
// //             <FaHeart />
// //             <FaTrash  color="" className="ml-2" />
// //             </span>

// //           </div>
// //           </div>

// //           {/* check */}
// //           <div className="ml-[170px] text-[15px]">
// //             <p className="font-medium">          Nike Air Max 97 SE
// //        <b className=" font-semibold ml-[258px] ">MRP: ₹ 16 995.00</b></p>
// //        <div className="text-[#757575] ">
// //             <p>Men&apos;s Shoes</p>
// //             <p>Flat Pewter/Light Bone/Black/White</p>
// //             <span>Size</span>
// //             <span>8</span>
// //             <span>Quantity</span>
// //             <span>1</span>
// //             </div>
// //             <span className="flex mt-2">
// //             <FaHeart />
// //             <FaTrash  color="" className="ml-2" />
// //             </span>

// //           </div>

// //           </div>

// //           {/* for flex */}
// //           <div className="ml-5 " >
// //             <h2 className="text-[21px] leading-[33px] font-medium text-[#111111]  " >Summary</h2>
// //             <div className="text-[15px] mt-9 ">
// //             <span>Subtotal</span>
// //             <span className="ml-[150px] ">₹20890.00</span>
// //             </div>
// //             <div className="mt-3">
// //             <span>Estimated Delivery & Handling</span>
// //             <span className="ml-5">Fixed</span>
// //             </div>
// //             <div className="flex mt-6">
// //             <span><h3>Total</h3></span>
// //             <span className="ml-[155.8px]">₹ 20 890.00</span>

// //             </div>

// //  {/* btn */}
// //  <div className=" max-ss:px-[10px] text-[#FFFFFF] py-1 max-ss:ml-[10px] mt-10  gap-2 flex " >
// //            <Link href={'/checkout'} >
// //            <button className="max-ss:ml-[0px] w-[225px ]   h-[60px] bg-[#111111] rounded-[30px] py-[18px] px-[100px]  ">Member Checkout</button>
// //            </Link>

// //            </div>

// //            </div>

// //            </div>
// //         </div>
// //       </div>
// //   );
// // }

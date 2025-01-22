'use client'
import React from 'react';
import { useRouter } from "next/navigation";


export const AddCartClient = () => {
    const Router = useRouter();

  return (
    <div>
              {/* add to cart */}
      <div >
      <h1>Shopping Cart App</h1>
      <button
        onClick={() => {
          Router.push("/product");
        }}
      >Show Products</button>
    </div>
    </div>
  )
}

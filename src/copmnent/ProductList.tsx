'use client';

import IProduct from '@/types/product';

export default function ProductList({ products }: { products: IProduct[] }) {
  const handleClick = (product: IProduct) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.name]) {
      cart[product.name] = {
        ...cart[product.name],
        quantity: cart[product.name].quantity + 1,
      };
    } else {
      cart[product.name] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className='flex justify-center gap-4 flex-wrap'>
      {products.map((product) => (
        <div key={product.name} className='border rounded'>
          {/* <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          /> */}
          <div className='flex justify-between p-2 items-center'>
            {/* <p>{product.name}</p> */}
            <button
              onClick={() => handleClick(product)}
              // hndler me vlue pass karnay k liye arrow fnc banegy
              className='p-3 border rounded'
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}






// 'use client';

// import IProduct from '@/types/product';
// // import IProduct from '@/types/product';
// import Image from 'next/image';
// interface IProduct {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   image: string;
//   available: boolean;
//   quantity?: number;
// }


// export default function ProductList({ products }: { products: IProduct} ) {
//   const handleClick = (product: IProduct) => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[product.name]) {
//       cart[product.name] = {
//         ...cart[product.name],
//         quantity: cart[product.name].quantity + 1,
//       };
//     } else {
//       cart[product.name] = { ...product, quantity: 1 };
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

//   // Check if products is an array and has items
//   if (!products || !Array.isArray(products) || products.length === 0) {
//     return <p>No products found.</p>; // Or a loading indicator
//   }

//   return (
//     <div key={products.name} className='flex justify-center gap-4 flex-wrap'>
//       {products.map((product) => (
//         <div key={product.name} className='border rounded'>
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={300}
//             height={300}
//           />
//           <div className='flex justify-between p-2 items-center'>
//             <p>{product.name}</p>
//             <p>{product.name} </p>
//             <button
//               onClick={() => handleClick(product)}
//               className='p-3 border rounded'
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




// import IProduct from '@/types/product';
// import Image from 'next/image';

// export default function ProductList({ products }: { products: IProduct[] | null | undefined }) {
//   const handleClick = (product: IProduct) => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[product.name]) {
//       cart[product.name] = {
//         ...cart[product.name],
//         quantity: cart[product.name].quantity + 1,
//       };
//     } else {
//       cart[product.name] = { ...product, quantity: 1 };
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

//   if (!products || !Array.isArray(products) || products.length === 0) {
//     return <p>No products found.</p>;
//   }

//   return (
//     <div className='flex justify-center gap-4 flex-wrap'>
//       {products.map((product) => {
//         if (!product.name || !product.image) return null;

//         return (
//           <div key={product.name} className='border rounded'>
//             <Image src={product.image} alt={product.name} width={300} height={300} />
//             <div className='flex justify-between p-2 items-center'>
//               <p>{product.name}</p>
//               <button
//                 onClick={() => handleClick(product)}
//                 className='p-3 border rounded'
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }



// import Image from 'next/image';

// interface IProduct {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   image: string;
//   description?: string; // Optional
// }

// export default function ProductList({ products }: { products: IProduct[] | null | undefined }) {
//   const handleClick = (product: IProduct) => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     if (cart[product.name]) {
//       cart[product.name] = {
//         ...cart[product.name],
//         quantity: cart[product.name].quantity + 1,
//       };
//     } else {
//       cart[product.name] = { ...product, quantity: 1 };
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

//   if (!products || products.length === 0) {
//     return <p>No products found.</p>;
//   }

//   return (
//     <div className='flex justify-center gap-4 flex-wrap'>
//       {products.map((product) => (
//         <div key={product.name} className='border rounded'>
//           <Image src={product.image} alt={product.name} width={300} height={300} />
//           <div className='flex justify-between p-2 items-center'>
//             <p>{product.name}</p>
//             <button
//               onClick={() => handleClick(product)}
//               className='p-3 border rounded'
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import SidebrPrdAll from "../components/SidebrPrdAll";
import {  FaCaretDown, FaFilter } from "react-icons/fa";
export default function AllProduct() {
    return (
      <>
      <div className="flex">
      <p className="ml-12 text-[24px ]  font-bold flex ">New (500)</p>
        <span className="flex ml-[900px] ">Hide Filters
          <span><FaFilter /></span>

          <span className="flex">Sort By
            <span><FaCaretDown  /></span>
            
          </span>
        </span>
        </div>
        <div className="max-ss:h-auto max-ss:w-[391px] w-[1440px ] max-ss:grid  flex ">
        <div className="">
        <SidebrPrdAll />

        </div>
        <div className="max-ss:w-auto w-[1092px ] flex flex-wrap ">


        
          

           
           {/****************************  prd original */}
           <div className="flex flex-wrap">
           <div className="w-[348px ] h-[533px] ml-12 flex  mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle.png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>


</div>


           {/* second */}
           <div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (1).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 4 995.00</p>

          </div>

          </div>


</div>
</div>

{/* 3rd */}
<div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Link className=" " href="/product-detail">

           <Image
          className=""
          src={"/Rectangle (2).png"}
          alt="shoes"
          width={348}
          height={348}
        />
           </Link>
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>
</div>

{/* row 2 */}
<div className="flex flex-wrap">
           <div className="w-[348px ] h-[533px] ml-12 flex  mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (3).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>


</div>


           {/* second */}
           <div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (4).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>

{/* 3rd */}
<div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Link className=" " href="/product-detail">

           <Image
          className=""
          src={"/Rectangle (5).png"}
          alt="shoes"
          width={348}
          height={348}
        />
           </Link>
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>
</div>


{/* 3rd row */}
<div className="flex flex-wrap">
           <div className="w-[348px ] h-[533px] ml-12 flex  mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (6).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>


</div>


           {/* second */}
           <div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (7).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>

{/* 3rd */}
<div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Link className=" " href="/product-detail">

           <Image
          className=""
          src={"/Rectangle (8).png"}
          alt="shoes"
          width={348}
          height={348}
        />
           </Link>
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>
</div>

{/* 4th row */}
<div className="flex flex-wrap">
           <div className="w-[348px ] h-[533px] ml-12 flex  mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (9).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>


</div>


           {/* second */}
           <div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle (10).png"}
          alt="shoes"
          width={348}
          height={348}
        />
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>

{/* 3rd */}
<div className="w-[348px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Link className=" " href="/product-detail">

           <Image
          className=""
          src={"/Rectangle (11).png"}
          alt="shoes"
          width={348}
          height={348}
        />
           </Link>
        <div className="w-[348px ] h-[185px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold text-[#9E3500] ">Just In</p>
          <p className="font-medium">Nike Air Force 1 Mid &apos;07</p>
          <div>
          <p className="font-semibold text-[#757575] ">Men&apos;s Shoes</p>
          <p className="font-semibold text-[#757575] ">1 Colour</p>
          </div>
          <p className="font-semibold  ">MRP : ₹ 10 795.00</p>

          </div>

          </div>


</div>
</div>
</div>



{/* last */}
<div className="w-[1092px ] h-[259px] border-t-[1px] border-[#E5E5E5] ">
<p className="mt-10 font-medium text-[19px] ">Related Categories</p>

<div className="max-ss:w-auto w-[1092px ] h-[174px] flex flex-wrap ">
<div className="w-[160.83px] h-[34px] border-[1px] rounded-[20px] mt-6 py-2 px-[5.83] text-[12px] text-center ">Best Selling Products</div>

<div className="w-[160.83px] h-[34px] border-[1px] rounded-[20px] mt-6 py-2 px-[5.83] text-[12px] text-center ">Best Shoes</div>


<div className="w-[160.83px] h-[34px] border-[1px] rounded-[20px] mt-6 py-2 px-[5.83] text-[12px] text-center  ">New Basketball Shoes</div>


<div className="w-[160.83px] h-[34px]  border-[1px] rounded-[20px] mt-6 py-2 px-[5.83] text-[12px] text-center ">New Football Shoes</div>


<div className="w-[160.83px] h-[34px]  text-[12px] text-center   border-[1px] rounded-[20px] mt-6 py-2 px-[5.83px]  ">New Men's Shoes</div>


<div className="w-[160.83px] h-[34px]  text-[12px] text-center  border-[1px] rounded-[20px] mt-6 py-2 px-[5.83] ">New Running Shoes</div>


<div className="w-[160.83px] h-[34px] text-[12px] text-center    border-[1px] rounded-[20px] mt-6 py-2 px-[5.83]">Best Men's Shoes</div><br />

<div className="w-[160.83px] h-[34px]  text-[12px] text-center  border-[1px] rounded-[20px] mt-6 py-2 px-[5.83]">Best Men's Shoes</div>


<div className="w-[160.83px] h-[34px] text-[12px] text-center  border-[1px] rounded-[20px] mt-6 py-2 px-[5.83px] ">Best Men's Shoes</div>

<div className="w-[160.83px] h-[34px]  text-[12px] text-center  border-[1px] rounded-[20px] mt-6 py-2 px-[5.83px] ">Best Men's Shoes</div>

</div>








</div>
</div>



           



    </div>



    </>
    )
}

import Image from "next/image";
import Link from "next/link";
export default function SignUP() {
    return (
        <div className="w-[1440px ]  flex ">
        <div className="w-[1100px ] h-[625px]  ">
        <div className="h-[547px ]  ">
        <div className="w-[733px] h-[547px ]  ">
        <div className="w-[681px] h-[62px ] ">
            <p>Free Delivery</p>
            <span>Applies to orders of ₹ 14 000.00 or more.</span>
            <span>View details</span>
            </div>
            <h4>Bag</h4>

         </div>

        
          

           
           {/****************************  img*/}
           <div className="w-[717px ] h-[533px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[348px ] h-[510px]">
           <Image
          className=""
          src={"/Rectangle.png"}
          alt="shoes"
          width={441.36}
          height={441.36}
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
          <div className="ml-[215px] font-semibold ">₹ 13 995</div>

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
          width={441.36}
          height={441.36}
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
          <div className="ml-[215px] font-semibold ">₹ 13 995</div>

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
          width={441.36}
          height={441.36}
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
          <div className="ml-[215px] font-semibold ">₹ 13 995</div>

          </div>


</div>
</div>
</div>

</div>




    </div>


    )
}
import Image from "next/image";
// import Link from "next/link";
export default function SecTop() {
  return (
    <div className="w-[1440px ] bg-gray-50 ">
        <div className="w-[1440px ] h-11 ">
            <p className="font-medium text-[15px] text-center  ">Hello Nike App</p>
            <p className="text-center">Download the app to access everything Nike. Get Your Great</p>
        

        </div>
        <div className="w-[1344px ] h-[970px] ">
        <Image
          className="w-[1344px ] h-[700px] "
          src={"/Image.png"}
          alt="shoes"
          width={1344}
          height={700}
        />

           <div className="w-[1008px ] h-[229px] mt-[28px] ">
           <p className="font-medium text-[15px] text-center  ">First Look</p>

           <h1 className=" font-medium  text-center mt-5 text-[56px] leading-[64px] ">Nike Air Max Pulse</h1>
           <p className=" w-[311px ] font-medium text-[15px] mt-5 text-center  ">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br />
—designed to push you past your limits and help you go to the max.</p>

{/* btn */}
            <div className="text-white py-1 mt-5 px-[379px] gap-2 flex " >
           <button className="w-[110px ] ml-[250px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Notify Me</button>
           <button className="w-[110px ] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Shop Air Max</button>
           </div>

           </div>
           </div>

           {/* prd */}
           <div className="w-[1440px ] h-[52px]">
            <p className="mt-3 ml-12 font-medium " >Best of Air Max</p>
            <div className="w-[164px ] h-[48px] flex ml-[1277px] ">
            <p className="mt-3 ml-12 font-medium" >Shop</p>
            <Image
          className=""
          src={"/Frame.png"}
          alt="shoes"
          width={24}
          height={24}
        />
        <Image
          className="ml-8"
          src={"/Vector2.png"}
          alt="shoes"
          width={12}
          height={12}
        />
            </div>


           </div>
           {/****************************  prd orihg */}
           <div className="w-[1440px ] h-[540px] ml-12 flex mt-12 gap-4 ">
           <div className="w-[441px ] h-[510px]">
           <Image
          className=""
          src={"/Image (1).png"}
          alt="shoes"
          width={441.36}
          height={441.36}
        />
        <div className="w-[425px ] h-[48px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold">Nike Air Max Pulse</p>
          <p>Women&apos;s Shoes</p>
          </div>
          <div className="ml-[215px] font-semibold ">₹ 13 995</div>

          </div>


</div>


           {/* second */}
           <div className="w-[441px ] h-[510px]">
           <Image
          className=""
          src={"/Image (2).png"}
          alt="shoes"
          width={441.36}
          height={441.36}
        />
        <div className="w-[425px ] h-[48px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold">Nike Air Max Pulse</p>
          <p>Men&apos;s Shoes</p>
          </div>
          <div className="ml-[215px] font-semibold ">₹ 13 995</div>

          </div>


</div>

{/* 3rd */}
<div className="w-[441px ] h-[510px]">
           <Image
          className=""
          src={"/Image (3).png"}
          alt="shoes"
          width={441.36}
          height={441.36}
        />
        <div className="w-[425px ] h-[48px] flex mt-6">
        <div className=" h-[134px]">
          <p className="font-semibold">Nike Air Max 97 SE</p>
          <p>Women&apos;s Shoes</p>
          </div>
          <div className="ml-[245px] font-semibold ">₹ 13 995</div>

          </div>


</div>
</div>

           



    </div>
    
    
  );
}

import Image from "next/image";
import Link from "next/link";

import { FaCartShopping } from "react-icons/fa6";
// import Link from "next/link";
export default function SignUP() {
    return (
        <div>
            <div className="w-[1200px] h-[1125px]">


                {/* white work */}

                <div className="w-[1305px] h-[781px] top-[200px] gap-[129px] flex">
                <div className="w-[653px] h-auto ">

                <Image
          className=""
          src={"/Rectangle (2).png"}
          alt="shoes"
          width={653}
          height={653}
        />
        </div>
                    <div className="w-[376px] h-[1041px]  ">
                        <p className="w-[376px] mt-6 leading-[48px] text-[48px] font-medium  ">Nike Air Force 1 
PLT.AF.ORM</p>
                        <div className="w-[374px] h-[342px] top-[75px] left-[-8px]">
                        <p className="w-[374px]  leading-[28px] text-[15px]  mt-6 ">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                     
                            <p className="w-[374px]  leading-[28px] text-[36px]  mt-6 ">                            ₹ 8 695.00
</p>
<div className="text-white  py-1 mt-5  gap-2 flex w-[194px]  bg-[#111111] rounded-[30px] " >
    <FaCartShopping className="ml-2 mt-3"/>
    <Link className=" " href="/cart">

           <button className="w-[174px ] text-[15px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  "> Add To Cart</button>
           </Link>

           
           </div>


                        </div>


                        {/* login */}
                    </div>
                    <FaCartShopping className="bg-white border-white" color="white" />



                </div>







            </div>


        </div>


    )
}

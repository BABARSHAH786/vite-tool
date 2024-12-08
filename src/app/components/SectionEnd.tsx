import Image from "next/image";
// import Link from "next/link";
export default function SecEnd() {
  return (
    <div>
        <div>
            <p className="text-[22px] leading-[28px] font-medium ml-[48px] ">Don&apos;t Miss</p>
        <Image
          className="ml-12 mt-5"
          src={"/Image (8).png"}
          alt="shoes"
          width={1344}
          height={12}
        />
        </div>
        <div className="mt-12">
            <h3 className="text-[52px] leading-[60px] text-center font-medium ml-[48px]">FLIGHT ESSENTIALS</h3>
            <p className="text-center mt-8
            ">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <div className="flex justify-center mt-9 ">
            <button className="w-[110px ] text-white h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]   ">Shop</button>
            </div>


           
        </div>

        <div className="w-[1344px] h-[592px] ml-12 ">
            <p className="font-medium text-[23px] mt-4 leading-7 ">The Essentials</p>
            <div className="w-[1344px] h-[592px] mt-4  left-[-6px] flex gap-2">
            <Image
          className=" "
          src={"/Imagey3.png"}
          alt="shoes"
          width={440}
          height={540}
        />
        <Image
          className=" "
          src={"/Image (9).png"}
          alt="shoes"
          width={440}
          height={540}
        />
        <Image
          className=" "
          src={"/Image (10).png"}
          alt="shoes"
          width={440}
          height={540}
        />
            </div>

        </div>

        {/* order list */}
        <section className="w-[880px] h-[192px] flex gap-10 gap-y-4  ml-[280px]  mt-[100px] ">

                  <div> 
                        <div className="  font-semibold text-[18px] ">Icons</div>
                        <div className="gap-x-4 ">
                        <li className="list-none">Air Force 1</li>
                        <li className="list-none">Huarache</li>
                        <li className="list-none">Air Max 90</li>
                        <li className="list-none">Air Max 95</li>
                        </div>
                        </div>
                        {/* 2 */}
                        <div> 
                        <div className="  font-semibold text-[18px] ">Shoes</div>
                        <li className="list-none">All shoes</li>
                        <li className="list-none">Custom Shoes</li>
                        <li className="list-none">Jordan Shoes</li>
                        <li className="list-none">Running Shoes</li>

                        </div>


                        {/* 3 */}
                        <div> 
                        <div className="  font-semibold text-[18px] ">Clothing</div>
                        <li className="list-none">All Clothing</li>
                        <li className="list-none">Modest Wear</li>
                        <li className="list-none">Hoodies & Pullovers</li>
                        <li className="list-none">Shirts & Tops</li>

                        </div>


                        {/* 4 */}
                        <div> 
                        <div className="  font-semibold text-[18px] ">Kids</div>
                        <li className="list-none">Infant & Toodler Shoes</li>
                        <li className="list-none">Kid Shoes</li>
                        <li className="list-none">Kid Jordan Shoes</li>
                        <li className="list-none">Kid Basketball Shoes</li>

                        </div>


                        
                    





                </section>
    </div>
    
    
  );
}
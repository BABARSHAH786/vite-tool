import Image from "next/image";
// import Link from "next/link";
export default function SignUP() {
    return (
        <div>
            <div>


                {/* login work */}

                <div className="">
                    <div className="w-[380px] h-[489px] ml-[530px] ">
                        <div className="w-[324px] h-[128px] mt-7 left-[28px] relative ">
                        <Image
          className="ml-12 "
          src={"/Vector8.png"}
          alt=""
          width={78.47}
          height={78.47}
        />
        <p className="w-[186px] mt-4 text-[18px] font-bold  ">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
        <input className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4" type="text " placeholder="Email address" />
        <input className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4" type="text " placeholder="Password" />
  
       {/* login */}
       <div className=" text-[10px] flex gap-1 mt-[16px] text-[#8D8D8D] ">By logging in, you agree to Nike&apos;s <b className="underline">Privacy Policy</b> <br /> <b className="underline">and Terms of Use.</b>
                        
                        </div>
                        <div className="w-[324px] mt-4 bg-[#111111] pl-[101px] relative ">

{/* btn */}
               <button className=" text-white h-[40px] bg-[#111111] rounded-[3px] py-[7px] px-[22px]  ">SIGN IN</button>
               </div>
                        </div>


                        <div className=" text-[12px] flex gap-3 mt-4">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  />
  <label > Keep me signed in</label>

           <p className="ml-12"> Forgotten your password?</p>
         </div>
                        

                    </div>
                   


                </div>







            </div>

        </div>


    )
}
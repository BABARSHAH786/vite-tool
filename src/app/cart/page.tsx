import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
export default function Cart() {
  return (
    <div className="w-[1440px ]  flex ">
      <div className="ml-10 w-[1100px ] h-[625px]  ">
        <div className="h-[547px ] flex ">
          <div className="w-[733px] h-[547px ] text-[23px] ">
            <div className="w-[681px] h-[62px ] ">
              <p className="text-[34px] " >Free Delivery</p>
              <span>Applies to orders of ₹ 14 000.00 or more.</span>
              <span>View details</span>
            </div>
            <h4>Bag</h4>
          
           <div className="flex">
          <Image
            className=""
            src={"/Frame (2).png"}
            alt="shoes"
            width={150}
            height={150}
          />
          <div>
            <p>Men's Short-Sleeve Running Top</p>
            <p>Ashen Slate/Cobalt Bliss</p>
            <FaHeart />
           
          </div>
          </div>
          </div>

          {/* for flex */}
          <div>
            <h2 className="text-[34px] " >Summary</h2>
            <div>
            <span>Subtotal</span>
            <span>₹ 20 890.00</span>
            </div>
            <div>
            <span>Estimated Delivery & Handling</span>
            <span>Fixed</span>
            </div>
            <div>
            <span><h3>Total</h3></span>
            <span>₹ 20 890.00</span>
            </div>
           </div>

           {/* btn */}
           <div className="max-ss:px-[10px] text-white py-1 max-ss:ml-[25px] mt-5 px-[379px] gap-2 flex " >
           <button className="max-ss:ml-[25px] w-[110px ]  ml-[250px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Notify Me</button>
           <button className="w-[110px ] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Shop Air Max</button>
           </div>
        </div>
      </div>
    </div>
  );
}

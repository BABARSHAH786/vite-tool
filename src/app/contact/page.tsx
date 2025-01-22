import { FaSearch, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Link from "next/link";

export default function Contact(){
    return(
        <section>
            <div className="max-ss:w-[412px] max-ss:ml-0 ml-[230px] ">
                <div className="max-ss:w-[12px]  text-center text-[32px] leading-[36px] font-medium text-[#111111] ">GET HELP</div>
                <div className="max-ss:ml-3 border-[1px] mt-5 w-[457px] flex h-14 justify-center align-center ml-[421px] rounded-sm ">
                <input className="" placeholder="What can we help you with?" />
                <FaSearch className="max-ss:ml-3 ml-[241px] mt-3 items-end" />
                </div>
                <h2 className="text-[34px] font-bold ">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p className="mt-3">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <p className="mt-3">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p className="mt-3">If you enter your PAN information at checkout, you &apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p className="mt-3">Apple Pay</p>
                <p className="mt-3"><b className="underline"> Nike Members </b>can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>

                <div className="max-ss:px-[10px] text-white  py-1 max-ss:ml-[25px] mt-5 px-[px] gap-2 flex " >
                    <Link href={'/join-us'}>
           <button className="max-ss:ml-[25px] w-[110px ]  ml-[px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">JOIN US</button>
           </Link>
           <Link href={'/all-product-page'}>
<button className="w-[110px ] h-[39px] ml-4 bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Shop NIKE</button>           </Link>

           </div>
        

                <p className="font-semibold mt-5">FAQs</p>
                <p className="font-semibold">Does my card need international purchases enabled?</p>
                <p className="w-[842px] ">Yes, we recommend asking your bank to enable international purchases on your card.<br /> You will be notified at checkout if international purchases need to be enabled.</p>
                <p className="mt-3 ">Please note, some banks may charge a small transaction fee for international orders.</p>

                <p className="font-semibold mt-5">You would I pay for my order with multiple methods?</p>
                <p>for Nike orders can&apos;t be split between multiple payment methods.</p>

                <p className="font-semibold mt-5">order with multiple methods?</p>
                <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>

                <p className="font-semibold mt-5">I pay for my order with multiple methods?</p>
                <p className="mb-2">Nike orders can&apos;t be split between multiple payment methods.</p>

                <p className="mb-2">Was this answer helpful?</p>
                <div className="flex w-[90px] gap-3 mb-5">
                <FaThumbsUp />
                <FaThumbsDown />
                </div>
                <p className="font-medium">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                <p className="font-medium mb-3">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>

                
            </div>
        </section>
        
    )

}
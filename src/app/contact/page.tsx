import Btn from "../components/btn"

export default function Contact(){
    return(
        <section>
            <div className="max-ss:ml-0 ml-[230px] ">
                <h2 className="text-[34px] font-bold ">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p>Apple Pay</p>
                <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>

                <div className="max-ss:px-[10px] text-white py-1 max-ss:ml-[25px] mt-5 px-[379px] gap-2 flex " >
           <button className="max-ss:ml-[25px] w-[110px ]  ml-[250px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Notify Me</button>
           <button className="w-[110px ] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">Shop Air Max</button>
           </div>
        

                <p className="font-semibold">FAQs</p>
                <p className="font-semibold">Does my card need international purchases enabled?</p>

                <p className="font-semibold">You would I pay for my order with multiple methods?</p>
                <p>for Nike orders can't be split between multiple payment methods.</p>

                <p className="font-semibold">order with multiple methods?</p>
                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>

                <p className="font-semibold">I pay for my order with multiple methods?</p>
                <p>Nike orders can't be split between multiple payment methods.</p>
            </div>
        </section>
        
    )

}
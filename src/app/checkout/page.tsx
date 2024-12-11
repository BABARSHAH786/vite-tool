import { FaBagShopping } from "react-icons/fa6"
import Image from "next/image"

export default function CheckOut(){
    return (
        <div>

      <div className="w-[880px]   relative left-[289px] flex">
        {/* left */}
        <div className="w-[440px]  ">
          <div className="h-[386px] grid gap-1 relative pt-5 ">
            <h3 className="font-medium text-[21px] leading-[23px] ">How would you like to get your order?</h3>
  
            <div className="h-[208px] pt[7px] pr-[2.39px] pb-[9px] text-[15px] text-[#757575]  ">
              Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.<b className="underline"> Learn More</b>
            </div>
            
  
          <div className="h-[82px] pt[7px] pr-[2.39px] pl-[21px] py-[29px] border-[#111111]  border-[1px] flex ">
          <FaBagShopping />

            <h2 className="font-medium text-[15px] ml-4">Deliver It</h2>
          </div>
        </div>
          
  
        {/* form */}
        <div className="w-[440px]  ">
          <form>
             <label className="font-semibold text-[21px] leading-[23px]" >Enter your name and address:</label><br />
            <input className="border-[1px] mt-3 border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="First Name" /> <br />
  
            <input className="border-[1px] mt-3 border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[rgb(17,17,17)] " type="text" placeholder="Last Name" />
            <input className="border-[1px] mt-3 border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Address Line 1" />
            <p className="text-[11px] ">We do not ship to P.O. boxes</p>
            <input className="border-[1px] mt-3 border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Address Line 2" />
            
            <input className="border-[1px] mt-3 border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Address Line 3" />
       <span className="w-[211px] h-[56px] mt-3 ">
            <input className="border-[1px] border-[#CCCCCC] w-[211px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Postal Code" />
         </span>
            <span className="w-[211px] h-[56px] mb-2 ">
                <input  className="border-[1px] ml-4 border-[#CCCCCC] w-[211px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Locality " />
             </span>
            {/* new */}
            <div>
              <span className="w-[211px] h-[56px] mt-3 ">
                <input className="border-[1px] border-[#CCCCCC] w-[211px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="State/Territory" />
              </span>
                <span className="w-[211px] h-[56px] ">
                    <input className="border-[1px] border-[#CCCCCC] w-[211px] ml-4 h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="India " />
                </span>
              {/* radio button */}
            </div>
  
          </form>
          </div>
  
  
          {/*new div  */}
          <div className="w-[440px] h-[256px]  ">
            <form>
              <h2 className="font-medium text-[21px] leading-[23px] mt-3">What&apos;s your contact information?</h2>
  
              <input className="border-[1px] border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="email" placeholder="Email" />
              <p className="text-[11px] ">A confirmation email will be sent after checkout.</p>
  
              <input className="border-[1px] border-[#CCCCCC] w-[440px] h-[56px] rounded-[4px] py-4 pl-4 text-[#111111] " type="text" placeholder="Phone Number" />
              <p className="text-[11px] ">A carrier might contact you to confirm delivery.</p>
  
            </form>
          </div>
         {/*PAN  */}
          <div className="w-[440px] h-[256px]  ">
            <form>
  
              <input type="text" placeholder="PAN" />
              <p className="text-[11px] ">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
  
             {/*ADD TWO RADIO BTN WITH TEXT  */}
  
              <div className="w-[440px] h-[60px] px-[185px] py-[16px] bg-[#F5F5F5] mt-9">
                <p className="text-[15px ] tracking-[0.5%] text-center ">Continue</p>
              </div>
              <div className="w-[440px] h-[316px] pt-[280px] rounded-[30px]  ">
                <p className="font-medium border-[#E5E5E5] rounded-[30px] text-[#111111] pt-[21px] pb-[12px] text-[20px ] tracking-[0.5%] text-center ">Delivery</p>
                <p className="font-medium border-[#E5E5E5] pt-[21px] pb-[4px] text-[15px ] tracking-[0.5%] text-center ">Billing</p>
                 <p className="font-medium border-[#E5E5E5] pt-[21px] pb-[4px] text-[15px ] tracking-[0.5%] text-center ">Payment</p>
  
              </div>
  
            </form>
          </div>
  
          
        </div>
        
  
        {/*right  */}
        <div className="w-[320px] h-[721px] ml-[55px] ">
            <h2 className="font-medium text-[21px] leading-[23px] ml-[80px] ">Order Summary</h2>
            <div className="text-[15px] mt-9 ">
            <span>Subtotal</span>
            <span className="ml-[150px] ">₹20890.00</span>
            </div>
            <div className="mt-3">
            <span>Delivery/Shipping</span>
            <span className="ml-5">Free</span>
            <hr />
            </div>
            <div className="flex mt-6">
                
            <span><h3>Total</h3></span>
            <span className="ml-[155.8px]">₹ 20 890.00</span>
            <hr />
           
            
            </div>
            <p className="mt-2 text-[9px] "> The total reflects the price of your order, including all duties and taxes</p>

            {/* prd 1 */}
             <div className="w-[320px] h-[474px]  ">
                <h2 className="font-bold text-[15px] leading-[23px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
                <div className="w-[320px] h-[208px]  flex">
                <Image
          className="w-[208px] h-[208px] "
          src={"/Frame (3).png"}
          alt="shoes"
          width={208}
          height={208}
        />
        <div className="ml-2">
        <h2>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</h2>
        <p className="text-[#8D8D8D] ">
        Qty 1      <br />
        Size L<br />
        ₹ 3 895.00
        </p>
        </div>


</div>


             {/* prd 2 */}
                <div className="w-[320px] h-[208px]  flex mt-5">
                <Image
          className="w-[208px] h-[208px] "
          src={"/Frame (4).png"}
          alt="shoes"
          width={208}
          height={208}
        />
        <div className="ml-2">
        <h2>Nike Air Max 97 SE Men&apos;s Shoes</h2>
        <p className="text-[#8D8D8D] ">
        Qty 1 <br />
        Size UK 8 <br />
        ₹ 16 995.00        </p>
        </div>


</div>

             </div>

          </div>
      </div>
      </div>
    )
  }
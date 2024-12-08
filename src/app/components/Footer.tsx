import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,  FaLandmark } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="w-[1440px] h-[331px] bg-[rgb(17,17,17)] ">
                 <footer className=" h-[241px]   flex text-[#FFFFFF] ">
<div className='flex ml-[34px]  mt-[40px] '>
<div className='w-[245px] '> 
      <li className=" list-none font-semibold text-[16px] mb-[20px]">Find A Store</li>
      <div className='text-[10px] gap-[20px] grid '>
      <li className="list-none">BECOME A MEMBER</li>
      <li className="list-none">SIGN UP FOR EMAIL</li>
      <li className="list-none">SEND Us Feedback</li>
      <li className="list-none">Student DISCOUNTS</li>
      </div>

      </div>
      {/* 2 */}
      <div className='w-[245px] '> 
      <div className="  font-semibold text-[16px] mb-[20px]">GET HELP</div>
      <div className='text-[10px] gap-[20px] grid text-[#7E7E7E] '>

      <li className="list-none">Order Status</li>
      <li className="list-none">Delivery</li>
      <li className="list-none">Returns</li>
      <li className="list-none">Payment Options </li>
      <li className="list-none">Contact Us On Nike.com inquiries</li>
      <li className="list-none">Contact Us On All other inquiries</li>
  </div>

      </div>


      {/* 3 */}
      <div className='w-[245px] '> 
      <div className="  font-semibold text-[16px] mb-[20px]">ABOUT NIKE</div>
      <div className='text-[10px] gap-[20px] grid text-[#7E7E7E]'>

      <li className="list-none">News</li>
      <li className="list-none">Careers</li>
      <li className="list-none">Investor</li>
      <li className="list-none">Sustainability</li>

      </div>

</div>

      {/* 4 */}
      <div className='flex gap-3 ml-[350px]'> 
      <FaFacebook className='bg-black rounded-[30px] ' size={30} color="gray" />
      <FaTwitter className='bg-black rounded-[30px]' size={30} color="gray" />
      <FaYoutube className='bg-black rounded-[30px]' size={30} color="gray" />
      <FaInstagram className='bg-black rounded-[30px]' size={30} color="gray" />



    

      </div>


      
      </div>
 





</footer>

{/* bottom */}
<div className='w-[1372px]  h-[62px] text-white mt-[56px] ml-11 '>
<div className='w-[px]  h-[32px] flex gap-3 text-[11px] '>
   <FaLandmark />
   <p>India</p>
   <p className='ml-[100px] text-[#7E7E7E] '>© 2023 Nike, Inc. All Rights Reserved</p>
   <div className='text-[10px] gap-3  text-[#7E7E7E] flex ml-[456px] '>

<li className="list-none ml-2">Guide</li>
<li className="list-none ml-2">Term of Sale</li>
<li className="list-none ml-2">Term of Use</li>
<li className="list-none ml-2">New Privacy Policy </li>

</div>

</div>

</div>
</div>
    )

}
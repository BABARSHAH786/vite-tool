import React from 'react'

export default function SidebrPrdAll() {
  return (
<div className="max-ss:h-auto max-ss:w-[391px] w-[1440px ]  flex ">


{/*sidebar  */}
<div className="w-[260px] h-[849px] ">
  <div className="w-[192px] h-[2145px] ml-12 ">
    <div className="w-[192px] h-[400px]  ">
      <h3>Shoes</h3>
      <h3>Sports Bras</h3>
      <h3>Tops & T-Shirts</h3>
      <h3>Hoodies & Sweatshirts</h3>
      <h3>Jackets</h3>
      <h3>Trousers & Tights</h3>
      <h3>Shorts</h3>
      <h3>Tracksuits</h3>
      <h3>Jumpsuits & Rompers</h3>
      <h3>Skirts & Dresses</h3>
      <h3>Socks</h3>
      <h3>Accessories & Equipment</h3>

      
       </div>
    {/*rado btn  */}
    <div className="w-[192px ] h-[1705px] mt-[20px] ">
      <div className="w-[192px ] h-[63px]  ">
      <p className="font-medium">Gender</p>
      <input type="checkbox" />
      <span>Men</span>
<div>
      <input type="checkbox" />
      <span>Women</span>
</div>
      <input type="checkbox" />
      <span>Unisex</span>

      </div>
{/*kids  */}
      <div className="w-[192px ] h-[134px] mt-12 ">
        <p className="font-medium">Kids</p>
        <input type="checkbox" />
        <span>Boys</span>
      <div>
        <input type="checkbox" />
        <span>Girls</span>
      </div>


        </div>

        {/* price */}
        <div className="w-[192px ] h-[134px]  ">
                  <p className="font-medium">Shop By Price</p>
                  <input type="checkbox" />
                  <span>Under ₹ 2 500.00</span>
                <div>
                  <input type="checkbox" />
                  <span>₹ 2 501.00 - ₹ 7 500.00</span>
                </div>


                  </div>


    
    
     </div>
 </div>
 </div>


{/*related cat sab say neechay  */}



</div>  )
}

import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-[1440px] ">
      <div className=" bg-[#f5f5f5] h-9 w-full max-sm:w-auto">
        <div className="ml-12 max-ss:ml-[5px]">
        <Image
          className=""
          src={"/Vector3x.png"}
          alt=""
          width={24}
          height={24}
        />
        </div>

        <div className="max-md:ml-2 max-ss:ml-[27px] max-sm:mb-1 w-[272px] h-[36px] text-[11px] font-medium ml-[1074px] justify-between pt-[-4px]  flex  ">
          <Link className="relative left-[45px]  " href="/">
            Find a store |
          </Link>
          <Link className="relative left-[45px] " href="/contact">
            Help |
          </Link>
          <Link className="relative left-[45px]  " href="/join-us">
            Join Us |
          </Link>
          <Link className="relative left-[45px]  " href="/sign-in">
            Sign In 
          </Link>
        </div>
      </div>

      <div className="w-[1440px] h-[60px] flex mt-4 ">
      <Link className="relative left-[45px] max-ss:ml-[78px]  " href="/">

        <Image
          className="ml-12 "
          src={"/Vector8.png"}
          alt=""
          width={78.47}
          height={78.47}
        />
                    </Link>

        <div className="w-[1211px] max-ss:hidden h-[36px]  ml-[210px] items-center  justify-between flex ">
          <div className="max-ss:hidden w-[272px] h-[36px] gap-6  justify-between flex  relative left-[107px] ">
            <Link className="relative left-[45px]  " href="/all-product-page">
              {" "}
              New.&.Featured
            </Link>
            <Link className="relative left-[45px] " href="/all-product-page">
              Men
            </Link>
            <Link className="relative left-[45px]  " href="/all-product-page">
              Women
            </Link>
            <Link className="relative left-[45px]  " href="/all-product-page">
              kids
            </Link>
            <Link className="relative left-[45px]  " href="/SignUp">
              Sale
            </Link>
            <Link className="relative left-[45px]  " href="/SignUp">
              SNKRS
            </Link>
          </div>
          <div className="max-ss:hidden w-[180px] h-[40px] relative left-5 flex ml-[320px] bg-[#f5f5f5] rounded-[10px] ">

            <Image
              className="pt-[10px] pl-[10px] "
              src={"/Vector10.png"}
              alt=""
              width={24}
              height={24}
            />

            <input className="ml-7 bg-[#f5f5f5] rounded-[10px]" placeholder="Search" />
          </div>
          <Image
            className="max-ss:hidden  relative left-5"
            src={"/Vector.png"}
            alt=""
            width={24}
            height={24}
          />
          <Image
            className="max-ss:hidden relative ml-[-64px] "
            src={"/Vector (1).png"}
            alt=""
            width={24}
            height={24}
          />
        </div>

       
      </div>
    </div>
  );
}

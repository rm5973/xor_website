import React from "react";
import right from "../IMAGE/About us/leftimg.svg"
import left from "../IMAGE/About us/right.svg"
export default function Abt() {
    return (
        <div>



            <div class="flex flex-col items-center justify-center" >
                <div class="py-4">
                    <h1 class="text-center border-2 w-28 border-black hover:border-[#3BECE1] text-white ">
                        A LITTLE BIT
                    </h1>
                </div>
                <h1 class="text-white italic font-Roboto text-3xl"> ABOUT  MYSELF </h1>
                </div>

              <div class=" flex inline-block">
                  <div class=" mr-[3vw] w-[50vw] inline-block">
                    <img src={left} alt="" />
                </div>

                <div class=" pt-[15vw] w-[40vw] inline-block flex  ">
                    <img src={right} alt="" />
                    <p class="text-black text-[4vw] font-dancingscript absolute inline-block ml-[16vw]  ">Hello</p>
                </div>
                
                 </div>




        </div>

    )
}
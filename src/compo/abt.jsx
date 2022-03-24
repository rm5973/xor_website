import React from "react";
import left from "../IMAGE/About us/leftimg.svg"
import right from "../IMAGE/About us/right.svg"
export default function Abt() {
    return (
        <div>

            

                <div class="flex flex-col 
                    items-center justify-center" >
                    <div class="py-4">
                        <h1 class="text-center border-2 w-28 border-black hover:border-[#3BECE1] text-white ">
                            A LITTLE BIT
                        </h1>
                    </div>
                    <h1 class="text-white italic font-Roboto text-3xl"> ABOUT  MYSELF </h1></div>

                <div class="w-[40vw] ml-16 inline-block -mt-10 "> <img src={right} alt="" /></div>
                <div class=" ml-[60vw] mt-5 w-[32vw] align-top inline-block">
                    <div> 
                        
                        <div class="inline-block text-white absolute ">
                            <div class="flex"><p class="ml-[10vw] mt-5  ">dwewcewrcewc</p></div></div>
                            
</div>
                        <div class="inline-block">
                        <img src={left} alt="" />
                    </div>
                   
                    
                </div>
                
            

        </div>

    )
}
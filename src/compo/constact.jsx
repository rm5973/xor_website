import { useState,useEffect } from 'react'
import PhoneContactimg1 from '../IMAGE/Contactus/PhoneContactimg1.jpg'
function useWindowSize(){
    const [size,setSize]=useState([window.innerHeight,window.innerwidth])
    useEffect(()=>{
        const handelResize=()=>{
            setSize([window.innerHeight,window.innerwidth])
        };
        window.addEventListener("resize",handelResize);

    },[])
    return size
}
export default function Contact() {
    const [height,width]=useWindowSize();
    return (<div class="" >
        <h1 class="text-white pt-[10px] pl-[40px] text-[50px]">Contact With Us</h1>
        <div class=" h-3/4 flex">
            <div class="ml-[100px] w-[400px] h-[500px] ">
            <img src={PhoneContactimg1} alt="no img found" class="h-[100%] w-[100%]  object-cover" />
            </div>


        <div class="">
            <div class=" mt-[125px] w-[215px] ml-[20.75rem]">

                <form action="/" method="post" class="" >
                    <div class="pt-2  w-[50px] "><input type="text" name="name" placeholder='NAME' class="w-[215px]" /></div>
                    <div class="pt-2  "> <input type="email" name="emailid" placeholder='EMAIL' class="w-[215px]" /></div>
                    <div class="pt-2  "><input type="text" name="message" placeholder='MESSAGE' class="w-[215px] h-[80px] text-center" />
                   <div class="pt-2  flex"><button class="absolute left-[887px] w-[100px] h-[30px] text-center border-2 bg-white text-black" type="submit" >submit</button></div> 
                    </div>
                </form>


            </div>




        </div></div>
        
    </div>)
}
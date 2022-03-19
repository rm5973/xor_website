import { useState, useEffect } from "react";
import PhoneContactimg1 from "../IMAGE/Contactus/PhoneContactimg1.jpg";
function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerwidth]);
  useEffect(() => {
    const handelResize = () => {
      setSize([window.innerHeight, window.innerwidth]);
    };
    window.addEventListener("resize", handelResize);
  }, []);
  return size;
}
export default function Contact() {
  const [height, width] = useWindowSize();
  return (
    <div class="">
      <h1 class="text-white pt-[10px] pl-[40px] text-[50px]">
        Contact With Us
      </h1>
      <div class=" ">
        <div class=" sm:w-2/3 inline-block">
          <img
            src={PhoneContactimg1}
            alt="no img found"
            class=" w-[100%]  "
          />
        </div>

        <div class="sm:inline-block sm:w-1/3  align-top p-3"> 
      <div class=" my-[15vw]">
            <div class=" ">
              <form  method="post" class=" ">
              
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  class=" mt-2 w-3/4 mx-auto block"
                />
              
              
                
                <input
                  type="email"
                  name="emailid"
                  placeholder="EMAIL"
                  class="  w-3/4 mt-2 mx-auto block"
                />
              
              
                <textarea
                  type="text"
                  name="message"
                  placeholder="MESSAGE"
                  class=" text-center w-3/4 m-2 mx-auto block"
                />
                <div class="text-white mx-auto w-3/4"><input type="checkbox"  class=" mx-auto "/> terms and conditions</div>
                
                
                
                  <button
                    class=" mx-auto text-center border-2 bg-white text-black block mt-2"
                    type="button"
                  >
                    submit
                  </button>
                
                
             
            </form></div>
            
          </div></div>
          
        
      </div>
    </div>
  );
}

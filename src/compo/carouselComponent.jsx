import NextJsCarousel from "./carosuel";
function CarouselComponent(){
  return(
  <div class="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-black">
  <div class="max-w-xl mx-auto lg:max-w-screen-xl">
    <div class="mb-16 lg:max-w-lg lg:mb-0">
      <div class="max-w-xl mb-6">
      <div>

        </div>
        <h2 class="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-teal-50 sm:text-7xl sm:leading-none ml-28">
          Certificates
        </h2>
   <NextJsCarousel/>
     </div>
   </div>
 </div>
 <div class="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
  <img src="my-codexhubdev/src/IMAGE/Certificates/Medal.jpeg" class="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md bg-black" alt="" />
 </div>
</div> 
  )
}
export default CarouselComponent;
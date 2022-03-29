import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (

			<Carousel>

<div>
  <div className="flex items-center justify-center m-4 bg-black md:m-24 md:h-1/3 h-96">
    <div className=" w-full  md:w-2/3  grid-cols-3 p-6 tracking-wide bg-gray-900 opacity-75 rounded-md ring-4 ring-[#118E88] shadow-inner shadow-[#118E88]">
      <div id="header" className="flex items-center col-span-2 mb-4">
      {/* <Image src="/assets/certificate1.svg" alt="img" width="75" height="75" className='rounded-full'/> */}
        <div className="items-center justify-center ml-6 leading-5 text-center sm">
          <h4 className="text-xl font-semibold text-white font-formula1">Srijan Mishra</h4>
          <h5 className="font-semibold text-[#03BFB5] font-formula1">1st year SRM-IST</h5>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>

<div>
  <div className="flex items-center justify-center h-auto m-24 bg-black">
    <div className="w-scren md:w-2/3  grid-cols-3 p-6 tracking-wide bg-gray-900 opacity-75 rounded-md ring-4 ring-[#118E88] shadow-inner shadow-[#118E88]">
      <h1 className="items-center mt-0 mb-4 text-3xl font-bold leading-normal text-center text-white md:mb-2">Feedback from our users</h1>
      <div id="header" className="flex items-center col-span-2 mb-4">
      {/* <Image src="/assets/certificate1.svg" alt="img" width="75" height="75" className='inline-block rounded-full md:inline'/> */}
        <div className="items-center justify-center ml-6 leading-5 text-left sm">
          <h4 className="text-xl font-semibold text-white font-formula1">Prashant</h4>
          <h5 className="font-semibold text-[#03BFB5] font-formula1">Netaji Subhash University of Technology</h5>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>


<div>
  <div className="flex items-center justify-center h-auto m-24 bg-black">
    <div className="w-full md:w-2/3  grid-cols-3 p-6 tracking-wide bg-gray-900 opacity-75 rounded-md ring-4 ring-[#118E88] shadow-inner shadow-[#118E88]">
      <h1 className="items-center mt-0 mb-2 text-3xl font-bold leading-normal text-center text-white">Feedback from our users</h1>
      <div id="header" className="flex items-center col-span-2 mb-4">
      {/* <Image src="/assets/certificate1.svg" alt="img" width="75" height="75" className='rounded-full'/> */}
        <div className="items-center justify-center ml-6 leading-5 text-left sm">
          <h4 className="text-xl font-semibold text-white font-formula1">Aman Patra</h4>
          <h5 className="font-semibold text-[#03BFB5] font-formula1">Biju Patnaik University of Technology</h5>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</div>


<div>
  <div className="flex items-center justify-center h-auto m-24 bg-black">
    <div className="w-full md:w-2/3  grid-cols-3 p-6 tracking-wide bg-gray-900 opacity-75 rounded-md ring-4 ring-[#118E88] shadow-inner shadow-[#118E88]">
      <h1 className="items-center mt-0 mb-2 text-3xl font-bold leading-normal text-center text-white">Feedback from our users</h1>
      <div id="header" className="flex items-center col-span-2 mb-4">
      {/* <Image src="/assets/certificate1.svg" alt="img" width="75" height="75" className='rounded-full'/> */}
        <div className="items-center justify-center ml-6 leading-5 text-left sm">
          <h4 className="text-xl font-semibold text-white font-formula1">Darshan Rajenderan</h4>
          <h5 className="font-semibold text-[#03BFB5] font-formula1">Asia Pacific University</h5>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</div>


<div>
  <div className="flex items-center justify-center h-auto m-24 bg-black">
    <div className="w-full md:w-2/3  grid-cols-3 p-6 tracking-wide bg-gray-900 opacity-75 rounded-md ring-4 ring-[#118E88] shadow-inner shadow-[#118E88]">
      <h1 className="items-center mt-0 mb-2 text-3xl font-bold leading-normal text-center text-white">Feedback from our users</h1>
      <div id="header" className="flex items-center col-span-2 mb-4">
      {/* <Image src="/assets/certificate1.svg" alt="img" width="75" height="75" className='rounded-full'/> */}
        <div className="items-center justify-center ml-6 leading-5 text-left sm">
          <h4 className="text-xl font-semibold text-white font-formula1">Abhinaba Chowdhury</h4>
          <h5 className="font-semibold text-[#03BFB5] font-formula1">Indian Institute of Engineering Science and Technology, Shibpur</h5>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</div>


			</Carousel>
		);
	}
};
import React from "react";

import Abt from "./compo/abt";
import Navbar from "./compo/navbar";
import Projects from "./compo/proj";
import Contact from "./compo/constact";
function App() {
  return (<div> 
    <div id="home">   <Navbar />
 
</div>
<div className=" bg-black   h-screen " id="about" ><Abt /></div>
<div className="bg-black h-screen" id="projects"><Projects /></div>
<div className="bg-black h-screen" id="contactus"> <Contact /> </div> 
 </div>

 
 
  );
}

export default App;

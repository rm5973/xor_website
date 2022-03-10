
import React from "react";
import Crds from "./crds";
import projectarry from "./projectarry";
function CardCreation(projectarry) {
  return (<div class="pt-2">
    <Crds
      url={projectarry.url}
      des={projectarry.des}
    /></div>
  )
}

export default function Projects(props) {
  return (
    <div>
      <h1 class="text-start text-gray-500 pl-5 text-3xl">PROJECTS</h1>
      <p class="text-white text-5xl pl-5 pt-3"> Types of Projects</p>
      <p class="text-white text-5xl pl-5 ">we have worked on.</p>
      <div class="flex flex-col items-center justify-center pt-8  ">
        <div class="border-2 flex h-coustomh w-3/4 bg-gradient-to-br from-blue-400 to-emerald-400  items-center justify-center">
          <div class="">{projectarry.map(CardCreation)}</div>

        </div>


      </div>

    </div>)
}
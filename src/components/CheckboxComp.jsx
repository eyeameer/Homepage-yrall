import React from "react";
import Checkbox  from "@/components/ui/checkbox"
export default function CheckboxComp({option}) {
  return (
<section className="col-span-12  flex flex-col font-poppinsLight">
<div className="text-sm xl:text-sm lg:text-xs  mb-5">Services</div>    
<div className="grid grid-flow-row gap-5 grid-cols-12">
<div className="col-span-6 xl:col-span-3 flex items-center space-x-1">
      <Checkbox className='border-white border-2 rounded-sm' id="terms" />
      <label
        htmlFor="terms"
        className="text-sm xl:text-sm lg:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Ui ux design
      </label>
    </div>
<div className="col-span-6 xl:col-span-3 flex items-center space-x-1">
      <Checkbox className='border-white border-2 rounded-sm' id="terms" />
      <label
        htmlFor="terms"
        className="text-sm xl:text-sm lg:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Backend
      </label>
    </div>
<div className="col-span-6 xl:col-span-3 xl:-ml-4 flex items-center space-x-1">
      <Checkbox className='border-white border-2 rounded-sm' id="terms" />
      <label
        htmlFor="terms"
        className="text-sm xl:text-sm lg:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Digital Marketing
      </label>
    </div>
<div className="col-span-6 xl:col-span-3 flex items-center space-x-1">
      <Checkbox className='border-white border-2 rounded-sm' id="terms" />
      <label
        htmlFor="terms"
        className="text-sm xl:text-sm lg:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Seo Service
      </label>
    </div>
<div className="col-span-6 xl:col-span-3 flex items-center space-x-1">
      <Checkbox className='border-white border-2 rounded-sm' id="terms" />
      <label
        htmlFor="terms"
        className="text-sm xl:text-sm lg:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Others
      </label>
    </div>
</div>
</section>
  );
}

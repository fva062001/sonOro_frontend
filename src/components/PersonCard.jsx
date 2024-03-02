import React from "react";
import Image from "next/image";

function PersonCard({ description, image, doing }) {
  return (
    <div className="border-[#606060] w-[40vw] h-fit border-[1px] rounded-2xl p-4">
      <div className="flex flex-row h-[16.9em]">
        <div className="w-[50%] font-medium text-xl h-full relative">
          {description}
          <p className="text-[#00dafd] text-sm absolute bottom-0 font-medium bottom-12/12">
            {doing}
          </p>
        </div>
        <div className="w-[50%]">
          <Image
            src={image}
            className="w-full h-full rounded-xl"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonCard;

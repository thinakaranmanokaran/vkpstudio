import React from "react";

const PhotoStyleCorners = () => {
  return (
<div className="fixed top-3 left-2 md:top-6   " >
<div className="relative w-[95vw] h-[97vh]  md:w-[98vw] md:h-[94vh]  flex items-center justify-center">
      {/* Your content */}
      {/* <h1 className="text-white text-lg">Photography Style</h1> */}

      {/* Corner Lines */}
      <div className="absolute top-0 left-0 w-8 h-8 xl:w-16 xl:h-16 border-t-4 border-l-4 border-white"></div>
      <div className="absolute top-0 right-0 w-8 h-8 xl:w-16 xl:h-16  border-t-4 border-r-4 border-white"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 xl:w-16 xl:h-16  border-b-4 border-l-4 border-white"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 xl:w-16 xl:h-16  border-b-4 border-r-4 border-white"></div>
    </div>
</div>
  );
};

export default PhotoStyleCorners;

// import { useEffect, useRef, useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

// const images = [
//   {
//     src: "/str-design1.png",
//     index: 1,
//   },
//   {
//     src: "/str-design2.png",
//     index: 2,
//   },
//   {
//     src: "/str-design3.png",
//     index: 3,
//   },
//   {
//     src: "/str-design4.png",
//     index: 4,
//   },
//   {
//     src: "/str-design5.png",
//     index: 5,
//   },
//   {
//     src: "/str-design6.png",
//     index: 6,
//   },
//   {
//     src: "/str-design7.png",
//     index: 7,
//   },
//   {
//     src: "/str-design8.png",
//     index: 8,
//   },
//   {
//     src: "/str-design9.png",
//     index: 9,
//   },
// ];

// const Gallery = ({ galleryImages }) => {
//   const [index, setIndex] = useState(4);
//   const [openModal, setOpenModal] = useState(false);
//   const ref = useRef();
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <div className="galleryWrap  grid grid-cols-3 gap-4 sm:grid-cols-3 items-center justify-center lg:gap-8">
//         {galleryImages &&
//           galleryImages.map((slide, index) => {
//             return (
//               <div
//                 className="single w-28 sm:w-36 lg:w-48 xl:w-54 2xl:w-64"
//                 key={index}
//                 onClick={() => {
//                   setOpen(true);
//                 }}
//               >
//                 <img
//                   src={slide.src}
//                   alt=""
//                   className="hover:scale-125 transition-all duration-300 aspect-square"
//                   onClick={() => setIndex(index)}
//                 />
//               </div>
//             );
//           })}
//       </div>
//       <Lightbox
//         close={() => setOpen(false)}
//         open={open}
//         index={index}
//         plugins={[Zoom]}
//         slides={images}
//       />
//     </div>
//   );
// };

// export default Gallery;

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import images from "../Data/galleryImages";

const Gallery = ({ galleryImages }) => {
  const [index, setIndex] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="galleryWrap  grid grid-cols-3 gap-4 sm:grid-cols-3 items-center justify-center lg:gap-8 lg:mt-16">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single w-24 xsm:w-28 sm:w-32 lg:w-48 xl:w-54 2xl:w-64"
                key={index}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <img
                  src={slide.src}
                  alt=""
                  className="hover:scale-110 transition-all duration-200 aspect-square cursor-pointer rounded-md"
                  onClick={() => setIndex(index)}
                />
              </div>
            );
          })}
      </div>
      <Lightbox
        close={() => setOpen(false)}
        open={open}
        index={index}
        plugins={[Zoom]}
        slides={images}
      />
    </div>
  );
};

export default Gallery;

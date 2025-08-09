// // components/BackgroundCollage.jsx
// export default function BackgroundCollage() {
//   const images = Array.from(
//     { length: 36 },
//     (_, i) => `collage/Picture${i + 1}.png`
//   );

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-[-1] grid grid-cols-6 grid-rows-6">
//       {images.map((src, i) => {
//         console.log(src);
//         return (
//           <img
//             key={i}
//             src={src}
//             alt={`Collage ${i + 1}`}
//             className="w-full h-full object-cover"
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default function BackgroundCollage() {
//   const images = Array.from(
//     { length: 36 },
//     (_, i) => `collage/Picture${i + 1}.png`
//   );

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-[-2]">
//       {/* Collage Grid */}
//       <div className="grid grid-cols-12 gap-1 w-full h-full">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Collage ${i + 1}`}
//             className="shadow-elevation-high w-full h-full object-cover"
//           />
//         ))}
//       </div>

//       {/* Black Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0" />
//     </div>
//   );
// }

export default function BackgroundCollage() {
  const images = Array.from(
    { length: 35 },
    (_, i) => `collage/Picture${i + 1}.webp`
  );
  //top-20 sm:top-24 lg:top-28
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-2]">
      {/* Masonry container */}
      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-1 p-1">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Collage ${i + 1}`}
            className="mb-1 w-full break-inside-avoid"
          />
        ))}
      </div>

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 pointer-events-none" />
    </div>
  );
}

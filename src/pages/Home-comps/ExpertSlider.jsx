// import  { useState } from 'react';

// const ExpertSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     <div key={1}>Hello World</div>,
//     'Card 2',
//     'Card 3',
//     'Card 4',
//     'Card 5',
//   ]; // Replace with your content

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto overflow-hidden">
//       <button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
//         onClick={handlePrev}
//       >
//         &#9664;
//       </button>

//       <div className="flex gap-4 transition-transform duration-300">
//         {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
//           <div
//             className="flex-shrink-0 w-1/3 border-2 border-red-500 p-4 rounded-lg shadow-md text-center"
//             key={index}
//           >
//             {card}
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
//         onClick={handleNext}
//       >
//         &#9654;
//       </button>
//     </div>
//   );
// };

// export default ExpertSlider;
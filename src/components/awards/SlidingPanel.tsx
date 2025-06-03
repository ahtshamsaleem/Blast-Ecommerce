// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./SlidingPanel.css";

// const colors = ["#e63946", "#f1fa8c", "#06d6a0", "#118ab2"];

// const SlidingDivs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <div className="parent">
//       {[0, 1, 2, 3].map((i) => {
//         const isActive = activeIndex === i;

//         return (
//           <motion.div
//             key={i}
//             className="child"
//             onClick={() => setActiveIndex(i)}
//             initial={{ x: 0 }}
//             animate={{
//               x: isActive ? `-${100 - 10}%` : 0, // Move left into view
//               zIndex: isActive ? 1 : 0,
//             }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             style={{
//               backgroundColor: colors[i],
//               right: `${i * 10}%`,
//             }}
//           >
//             {isActive ? `Content ${i + 1}` : `Box ${i + 1}`}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default SlidingDivs;

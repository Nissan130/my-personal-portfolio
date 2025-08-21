// import { useEffect, useRef, useState } from 'react';

// export const useInViewAnimation = (animationClass = 'fade-in-up', threshold = 0.5) => {
//   const elementRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           elementRef.current.classList.add(animationClass);
//           setHasAnimated(true); // Prevent it from blinking
//         }
//       },
//       { threshold }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [animationClass, threshold, hasAnimated]);

//   return elementRef;
// };

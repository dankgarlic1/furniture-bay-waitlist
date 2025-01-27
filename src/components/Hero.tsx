// "use client";
// import { motion } from "framer-motion";
// import { Button } from "./ui";

// export default function Hero() {
//   return (
//     <section className="pt-32 pb-20 px-4">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="lg:w-1/2 mb-10 lg:mb-0"
//         >
//           <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//             Redefine Your <span className="text-gradient">Living Space</span>
//           </h1>
//           <p className="text-xl mb-8 text-gray-600">
//             Discover Cony's exquisite furniture collection. Join our waitlist
//             for exclusive early access and special offers.
//           </p>
//           <Button onClick={() => {}}>Join the Waitlist</Button>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="lg:w-1/2"
//         >
//           <img
//             src="/hero2.jpg"
//             alt="Modern furniture showcase"
//             height={300}
//             width={650}
//             className="rounded-lg shadow-2xl animate-float max-w-full h-auto"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

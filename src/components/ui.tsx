// "use client";

// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { ReactNode } from "react";

// export const Button = ({
//   children,
//   className = "",
//   ...props
// }: {
//   children: ReactNode;
//   className?: string;
//   [key: string]: any;
// }) => (
//   <motion.button
//     className={`px-6 py-3 bg-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     {...props}
//   >
//     {children}
//   </motion.button>
// );

// export const Input = ({ className = "", ...props }) => (
//   <input
//     className={`w-full px-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${className}`}
//     {...props}
//   />
// );

// export const Card = ({
//   children,
//   className = "",
// }: {
//   children: ReactNode;
//   className?: string;
// }) => (
//   <motion.div
//     className={`glassmorphism p-6 ${className}`}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     {children}
//   </motion.div>
// );

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-100 w-full rounded-md z-0",
//         className
//       )}
//     >
//       <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             aspectRatio: "2/1",
//           }}
//           className="absolute inset-auto right-1/2 h-56 bg-gradient-to-r from-blue-300 to-teal-300 blur-2xl"
//         />
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             aspectRatio: "2/1",
//           }}
//           className="absolute inset-auto left-1/2 h-56 bg-gradient-to-r from-teal-300 to-blue-300 blur-2xl"
//         />
//       </div>
//       <div className="relative z-10 flex -translate-y-80 flex-col items-center px-5">
//         {children}
//       </div>
//     </div>
//   );
// };

// export const BackgroundGradient = ({
//   children,
//   className,
//   containerClassName,
//   animate = true,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   animate?: boolean;
// }) => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <div className={cn("relative p-[4px] group", containerClassName)}>
//       <motion.div
//         variants={animate ? variants : undefined}
//         initial={animate ? "initial" : undefined}
//         animate={animate ? "animate" : undefined}
//         transition={
//           animate
//             ? {
//                 duration: 5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }
//             : undefined
//         }
//         style={{
//           backgroundSize: animate ? "400% 400%" : undefined,
//         }}
//         className={cn(
//           "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
//           "bg-[radial-gradient(circle_farthest-side_at_0_100%,#60a5fa,transparent),radial-gradient(circle_farthest-side_at_100%_0,#34d399,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#fbbf24,transparent),radial-gradient(circle_farthest-side_at_0_0,#3b82f6,#f0f9ff)]"
//         )}
//       />
//       <div className={cn("relative z-10", className)}>{children}</div>
//     </div>
//   );
// };

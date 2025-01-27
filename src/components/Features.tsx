// "use client";

// import { motion } from "framer-motion";
// import { Card } from "./ui";
// import { FaLeaf, FaPalette, FaShippingFast } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaLeaf className="text-4xl text-green-500" />,
//     title: "Eco-Friendly",
//     description: "Sustainably sourced materials for a greener future.",
//   },
//   {
//     icon: <FaPalette className="text-4xl text-blue-500" />,
//     title: "Custom Designs",
//     description: "Tailor-made furniture to match your unique style.",
//   },
//   {
//     icon: <FaShippingFast className="text-4xl text-yellow-500" />,
//     title: "Fast Delivery",
//     description: "Quick and reliable shipping to your doorstep.",
//   },
// ];

// export default function Features() {
//   return (
//     <section id="features" className="py-20 px-4 bg-gray-50">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
//           Why Choose Cony?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="text-center h-full">
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

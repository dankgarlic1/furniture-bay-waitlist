// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import { Button, Input, Card } from "./ui";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

// export default function Signup() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     console.log(data);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setIsSubmitted(true);
//   };

//   return (
//     <section id="signup" className="py-20 px-4 bg-gradient">
//       <div className="container mx-auto">
//         <Card className="max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
//             Join Our Exclusive Waitlist
//           </h2>
//           {isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-2xl text-green-600 font-semibold"
//             >
//               Thank you for joining! We'll keep you updated on our launch.
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <Input
//                   type="text"
//                   placeholder="First Name"
//                   {...register("firstName", {
//                     required: "First name is required",
//                   })}
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.firstName.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <Input
//                   type="text"
//                   placeholder="Last Name"
//                   {...register("lastName", {
//                     required: "Last name is required",
//                   })}
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.lastName.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Email Address"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Invalid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//               <Button type="submit" className="w-full">
//                 Join the Waitlist
//               </Button>
//             </form>
//           )}
//         </Card>
//       </div>
//     </section>
//   );
// }

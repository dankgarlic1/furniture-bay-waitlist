import { LampContainer } from "./ui";

export default function Hero() {
  return (
    <LampContainer>
      <div className="relative z-10 text-center text-gray-800">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          Conny - Modern Furniture
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Stylish, quality furniture for your perfect space.
        </p>
        <a
          href="#signup"
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-teal-500 transition-all animate-fade-in-up animation-delay-400"
        >
          Join the Waitlist
        </a>
      </div>
    </LampContainer>
  );
}

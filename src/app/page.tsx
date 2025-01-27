"use client";

import React, { useState } from "react";
import {
  Sofa,
  Send,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Leaf,
  Palette,
  Heart,
  Shield,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import confettiAnimation from "@/data/confetti.json";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    setFormData({ firstName: "", lastName: "", email: "" });

    // Hide confetti after animation completes
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Add confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Lottie
            animationData={confettiAnimation}
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="#hero"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Sofa className="h-6 w-6 sm:h-8 sm:w-8 text-violet-600" />
              <span className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
                FurnitureBay
              </span>
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-violet-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#gallery"
                className="text-slate-600 hover:text-violet-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#waitlist"
                className="text-slate-600 hover:text-violet-600 transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg border-b border-violet-100 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="py-4 px-4 space-y-4">
              <a
                href="#features"
                className="block text-slate-600 hover:text-violet-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#gallery"
                className="block text-slate-600 hover:text-violet-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#waitlist"
                className="block text-slate-600 hover:text-violet-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="#hero"
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-100 rounded-full text-violet-700 text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">
                  Coming Soon: Exclusive Collection Launch
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  Redefining
                </span>
                <span className="block text-slate-800">Modern Living</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
                Experience the perfect blend of artisanal craftsmanship and
                contemporary design. Where every piece tells a story of elegance
                and comfort.
              </p>

              <a
                href="#waitlist"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl text-lg font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-300/30 hover:shadow-violet-400/40"
              >
                Join the Movement
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-violet-400/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
                  alt="Modern living room with elegant furniture"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-violet-900/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-xs border border-violet-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-violet-100 rounded-xl">
                    <Heart className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Crafted with Love
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Every piece is made with passion and dedication to
                      perfection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Crafting Excellence
            </h2>
            <p className="text-lg text-slate-600">
              Discover what makes our furniture collection unique and why
              you&apos;ll fall in love with every piece.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-violet-100/50 hover:border-violet-200 transition-all duration-300 hover:shadow-lg hover:shadow-violet-300/10 group"
              >
                <div className="p-3 bg-violet-100 rounded-xl inline-block mb-4 group-hover:bg-violet-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12 sm:mb-16 text-center">
            Our Collection Preview
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-12 sm:py-20 bg-white/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Be the First to Experience
            </h2>
            <p className="text-lg text-slate-600">
              Join our exclusive waitlist to get early access to our collection
              launch, special discounts, and behind-the-scenes content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="First Name"
                  className="w-full px-6 py-4 bg-white/70 backdrop-blur-xl rounded-2xl border border-violet-100 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/20 outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  required
                />
              </div>
              <div className="relative group">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Last Name"
                  className="w-full px-6 py-4 bg-white/70 backdrop-blur-xl rounded-2xl border border-violet-100 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/20 outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email address"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/70 backdrop-blur-xl rounded-2xl border border-violet-100 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/20 outline-none transition-all text-slate-800 placeholder:text-slate-400"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto mt-4 sm:mt-0 sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-6 sm:px-8 py-2.5 rounded-xl flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 shadow-lg shadow-violet-300/30 hover:shadow-violet-400/40"
              >
                Join Waitlist
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {submitted && (
            <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50/80 backdrop-blur-xl p-4 rounded-2xl max-w-md mx-auto mt-6 border border-emerald-100">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you for joining our waitlist!</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-lg border-t border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sofa className="h-8 w-8 text-violet-600" />
                <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  FurnitureBay
                </span>
              </div>
              <p className="text-slate-600">
                Redefining modern living through exceptional furniture design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#waitlist"
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    Join Waitlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-slate-600">hello@furniturebay.com</li>
                <li className="text-slate-600">+91 9870595129</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-violet-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-violet-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="text-slate-400 hover:text-violet-600 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-violet-100">
            <p className="text-center text-slate-600">
              © {new Date().getFullYear()} FurnitureBay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Palette className="h-6 w-6 text-violet-600" />,
    title: "Artisanal Craftsmanship",
    description:
      "Each piece is meticulously crafted by master artisans, ensuring exceptional quality and attention to detail.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-violet-600" />,
    title: "Sustainable Materials",
    description:
      "We source only the finest sustainable materials, combining environmental responsibility with luxury.",
  },
  {
    icon: <Shield className="h-6 w-6 text-violet-600" />,
    title: "Lifetime Guarantee",
    description:
      "Every piece comes with our commitment to quality, backed by a lifetime craftsmanship guarantee.",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    alt: "Modern living room setup",
    title: "The Living Collection",
    description: "Contemporary comfort meets timeless elegance",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    alt: "Minimalist dining setup",
    title: "Dining Essentials",
    description: "Where memories are made",
  },
  {
    url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80",
    alt: "Bedroom furniture",
    title: "Bedroom Sanctuary",
    description: "Your personal retreat",
  },
];

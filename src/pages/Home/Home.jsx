import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from './../../component/header/Header';
import Footer from './../../component/footer/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
            Elevate Your Game with Premium Sports Equipment
          </Typography>
          <Typography color="gray" className="mb-8 text-lg">
            Discover top-quality gear for every sport. From professionals to weekend warriors.
          </Typography>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Button
                color="black"
                size="lg"
                className="rounded-md flex items-center gap-2"
                onClick={() => navigate("/Products")}
              >
                Shop Now
                <GoArrowRight />
              </Button>
            </div>

            
            <Button
              variant="outlined"
              color="black"
              size="lg"
              className="rounded-md"
              onClick={() => navigate("/About")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Secure Payment</h4>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Quality Guaranteed</h4>
                <p className="text-sm text-gray-600">Premium sports equipment</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Best Prices</h4>
                <p className="text-sm text-gray-600">Competitive pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">
            Explore our wide range of sports equipment categories
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => navigate("/Products")}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400"
              alt="Footwear"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white mb-1">Footwear</h3>
              <p className="text-white/80 text-sm">24 Products</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Products")}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400"
              alt="Fitness"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white mb-1">Fitness</h3>
              <p className="text-white/80 text-sm">18 Products</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Products")}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400"
              alt="Team Sports"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white mb-1">Team Sports</h3>
              <p className="text-white/80 text-sm">32 Products</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Products")}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400"
              alt="Outdoor"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white mb-1">Outdoor</h3>
              <p className="text-white/80 text-sm">15 Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="py-12 border-b  bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold pb-6">Featured Products</h2>
          <h3 className="text-gray-600">Check out our best-selling sports equipment</h3>
          </div>
          <button
            onClick={() => navigate("/Products")}
            className="flex content-center items-center gap-3 px-5 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition" 
          >
            View All
            <GoArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 p-4">
     
      <div
        onClick={() => navigate("/Products")}
        className="group bg-card rounded-lg border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
            alt="Basketball"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
            -20%
          </span>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium bg-gray-200 text-xs">
              Footwear
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold">Professional Running Shoes</h3>
          <div className="flex items-center gap-2 py-6">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} className="text-yellow-700 w-5 h-5" />
      ))}
      <FaStar className="text-gray-300 w-5 h-5" />
    </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">$39.99</span>
            <span className="text-sm text-gray-500 line-through">$49.99</span>
          </div>

          <button
            onClick={() => {
              alert("Added Pro Basketball to cart");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-black text-white w-full py-2"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      
      <div
        onClick={() => navigate("/Products")}
        className="group bg-card rounded-lg border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1579758629934-095f71d22a3a?w=800"
            alt="Tennis Racket"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium bg-gray-200 text-xs">
             Fitness
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold">Premium Yoga Mat</h3>
          <div className="flex items-center gap-2 py-6">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} className="text-yellow-700 w-5 h-5" />
      ))}
      <FaStar className="text-gray-300 w-5 h-5" />
    </div>
          <div className="flex items-center gap-2 mb-4">
            
            <span className="font-bold">$89.99</span>
          </div>
          <button
            onClick={() => {
              alert("Added Tennis Racket to cart");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-black text-white w-full py-2"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      
      <div
        onClick={() => navigate("/Products")}
        className="group bg-card rounded-lg border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1589187155478-3f24f54ddde4?w=800"
            alt="Soccer Ball"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium bg-gray-200 text-xs">
              Strength
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold">Adjustable Dumbbells Set</h3>
          
          <div className="flex items-center gap-2 mb-4">
            {[...Array(4)].map((_, i) => (
        <FaStar key={i} className="text-yellow-700 w-5 h-5" />
      ))}
      <FaStar className="text-gray-300 w-5 h-5" />
    </div>
            <div className="flex items-center gap-2 py-6">
            <span className="font-bold">$29.99</span>
          </div>
          <button
            onClick={() => {
              alert("Added Soccer Ball to cart");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-black text-white w-full py-2"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      <div
        onClick={() => navigate("/Products")}
        className="group bg-card rounded-lg border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800"
            alt="Boxing Gloves"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium bg-gray-200 text-xs">
              Cycling
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold">Mountain Bike Helmet</h3>
          <div className="flex items-center gap-2 py-6">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} className="text-yellow-700 w-5 h-5" />
      ))}
      <FaStar className="text-gray-300 w-5 h-5" />
    </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">$59.99</span>
          </div>
          
          <button
            onClick={() => {
              alert("Added Boxing Gloves to cart");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-black text-white w-full py-2"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
      </div>
    </section>

    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-primary-foreground">
          Get 20% Off Your First Order
        </h2>
        <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Sign up for our newsletter and receive exclusive deals, new product
          announcements, and training tips from professional athletes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg flex-1 bg-white text-black hover:bg-white/80"
          />
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all 
                       bg-white text-black hover:bg-white/70 
                       h-10 rounded-md px-6"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <Footer />
      </div>
  );
};

export default Home;

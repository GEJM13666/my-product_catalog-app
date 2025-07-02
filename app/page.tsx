import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Welcome to Our Shop</title>
        <meta name="description" content="Find the best electronics, clothing, and books" />
      </Head>

      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">ShopNow</span>

        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Discover amazing products in electronics, clothing, and books at the best prices
        </p>
        <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">
          Shop Now
        </Link>
      </div>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">Our Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Electronics Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 h-48 flex items-center justify-center">
              <svg className="w-20 h-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electronics</h3>
              <p className="text-gray-600">Latest gadgets and devices</p>

              <Link href="/products/clothing" className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Browse Products →
              </Link>
            </div>
          </div>

          {/* Clothing Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-pink-100 h-48 flex items-center justify-center">
              <svg className="w-20 h-20 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clothing</h3>
              <p className="text-gray-600">Stylish outfits for everyone</p>
              <Link href="/products/clothing" className="mt-4 text-pink-600 hover:text-pink-800 font-medium">
                Browse Products →
              </Link>

            </div>
          </div>

          {/* Books Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-green-100 h-48 flex items-center justify-center">
              <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Books</h3>
              <p className="text-gray-600">Knowledge and entertainment</p>

              <Link href="/products/clothing" className="mt-4 text-green-600 hover:text-green-800 font-medium">
                Browse Products →
              </Link>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default HomePage;
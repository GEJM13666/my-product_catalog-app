import Link from 'next/link'
import { FiHome, FiShoppingBag } from 'react-icons/fi'

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center text-6xl mb-4 text-yellow-500">
          <FiShoppingBag />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Category Not Found</h1>
        <p className="text-gray-600 mb-6">
          The product category you're looking for doesn't exist in our store.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            <FiShoppingBag className="mr-2" />
            Browse All Products
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            <FiHome className="mr-2" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
'use client'
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'
const products = [
{ 
    id: '1', 
    slug: 'laptop-pro', 
    name: 'Laptop Pro', 
    category: 'electronics', 
    price: 1200,
    image: '/laptop.jpg',
    rating: 4.5,
    reviews: 128
  },
  { 
    id: '2', 
    slug: 'wireless-mouse', 
    name: 'Wireless Mouse', 
    category: 'electronics', 
    price: 25,
    image: '/mouse.jpg',
    rating: 4.2,
    reviews: 56
  },
  { 
    id: '3', 
    slug: 't-shirt-basic', 
    name: 'Basic T-Shirt', 
    category: 'clothing', 
    price: 15,
    image: '/tshirt.jpg',
    rating: 4.0,
    reviews: 89
  },
  { 
    id: '4', 
    slug: 'sci-fi-novel', 
    name: 'Sci-Fi Novel', 
    category: 'books', 
    price: 10,
    image: '/book.jpg',
    rating: 4.8,
    reviews: 203
  },
];

export default function AllProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <Link href={`/products/${product.category}/${product.slug}`}>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">${product.price}</p>
              </div>
            </Link>
            <button className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-colors duration-300">
              <FiShoppingCart className="inline mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
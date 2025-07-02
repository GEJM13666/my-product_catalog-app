import { notFound } from 'next/navigation'
import { FiStar, FiShoppingCart, FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

const products = [
  { 
    id: '1', 
    slug: 'laptop-pro', 
    name: 'Laptop Pro', 
    category: 'electronics', 
    price: 1200,
    image: '/laptop-details.jpg',
    rating: 4.5,
    reviews: 128,
    description: 'Powerful laptop with high-performance processor and long battery life. Perfect for professionals and creatives.',
    specs: {
      processor: 'Intel Core i7',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6" FHD'
    }
  },
  { 
    id: '2', 
    slug: 'wireless-mouse', 
    name: 'Wireless Mouse', 
    category: 'electronics', 
    price: 25,
    image: '/mouse.jpg',
    rating: 4.2,
    reviews: 56,
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    specs: {
      connectivity: 'Bluetooth',
      battery: '12 months',
      dpi: '1600',
      color: 'Black'
    }
  },
  { 
    id: '3', 
    slug: 't-shirt-basic', 
    name: 'Basic T-Shirt', 
    category: 'clothing', 
    price: 15,
    image: '/tshirt.jpg',
    rating: 4.0,
    reviews: 89,
    description: 'Comfortable 100% cotton t-shirt available in multiple colors.',
    specs: {
      material: '100% Cotton',
      sizes: 'S, M, L, XL',
      colors: 'White, Black, Gray',
      fit: 'Regular'
    }
  },
  { 
    id: '4', 
    slug: 'sci-fi-novel', 
    name: 'Sci-Fi Novel', 
    category: 'books', 
    price: 10,
    image: '/book-details.jpg',
    rating: 4.8,
    reviews: 203,
    description: 'Bestselling science fiction novel with rave reviews from critics.',
    specs: {
      author: 'John Author',
      pages: '320',
      publisher: 'Sci-Fi Books',
      language: 'English'
    }
  },
];

interface ProductDetailPageProps {
  params: {
    category: string
    slug: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // หาสินค้าตาม category และ slug
  const product = products.find(p => 
    p.slug === params.slug && 
    p.category === params.category
  )
  
  if (!product) {
    return notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ปุ่มกลับ */}
        <div className="mb-6">
          <Link 
            href={`/products/${product.category}`}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FiChevronLeft className="mr-1" />
            Back to {product.category}
          </Link>
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* รูปภาพสินค้า */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ข้อมูลสินค้า */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full capitalize">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price}</p>

              {/* คำอธิบาย */}
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* รายละเอียดสเปค */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Specifications</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="text-gray-500 font-medium capitalize">{key}:</span>
                      <span className="ml-2 text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ปุ่มเพิ่มลงตะกร้า */}
              <div className="flex space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">-</button>
                  <span className="px-3 py-2">1</span>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
                </div>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md flex items-center justify-center transition-colors duration-300">
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* สินค้าที่เกี่ยวข้อง */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => 
                p.slug !== product.slug && 
                p.category === product.category
              )
              .slice(0, 4)
              .map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <Link href={`/products/${related.category}/${related.slug}`}>
                    <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{related.name}</h3>
                      <p className="text-gray-500 text-sm capitalize mb-2">{related.category}</p>
                      <p className="text-lg font-semibold text-gray-900">${related.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
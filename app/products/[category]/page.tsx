import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiStar, FiShoppingCart } from 'react-icons/fi'
const products = [
  { 
    id: '1', 
    slug: 'laptop-pro', 
    name: 'Laptop Pro', 
    category: 'electronics', 
    price: 1200,
    image: '/laptop.jpg',
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
    image: '/book.jpg',
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


interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // ตรวจสอบ category
  const validCategories = ['electronics', 'clothing', 'books']
  if (!validCategories.includes(params.category)) {
    return notFound()
  }

  // กรองสินค้า
  const filteredProducts = products.filter(
    p => p.category === params.category
  )

  // ชื่อหมวดหมู่สำหรับแสดงผล
  const categoryName = params.category === 'electronics' ? 'Electronics' :
                      params.category === 'clothing' ? 'Clothing' : 'Books'

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{categoryName}</h1>
      <p className="text-gray-600 mb-6">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
      </p>
      
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-gray-600">No products found in this category.</p>
          <Link 
            href="/products" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Browse all products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 flex items-center justify-center transition-colors duration-300">
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiLayers, FiShoppingBag, FiBook, FiSmartphone } from 'react-icons/fi'

export default function ProductsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  
  // ตรวจสอบและดึง category จาก pathname
  const getCurrentCategory = () => {
    const parts = pathname?.split('/') || []
    if (parts.length >= 3 && parts[1] === 'products') {
      return parts[2] // ส่วนของ category
    }
    return null
  }

  const currentCategory = getCurrentCategory()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 md:space-x-4">
            <li className="inline-flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FiHome className="mr-1.5 h-4 w-4" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-300">/</span>
                <Link 
                  href="/products" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Products
                </Link>
              </div>
            </li>
            {currentCategory && (
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-300">/</span>
                  <span className="text-gray-600 font-medium">
                    {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
                  </span>
                </div>
              </li>
            )}
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 lg:w-80 flex-shrink-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">
                <FiLayers className="inline mr-2" />
                Product Categories
              </h2>
              <ul className="space-y-3">
                {['electronics', 'clothing', 'books'].map((category) => (
                  <li key={category}>
                    <Link
                      href={`/products/${category}`}
                      className={`flex items-center px-3 py-2 rounded-lg transition-all ${
                        currentCategory === category
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span className="mr-3 text-lg">
                        {category === 'electronics' ? <FiSmartphone /> : 
                         category === 'clothing' ? <FiShoppingBag /> : <FiBook />}
                      </span>
                      <span className="font-medium">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* ส่วนเสริมอื่นๆ */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  
                </h3>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
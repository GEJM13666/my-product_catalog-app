'use client'

import { FiUsers, FiAward, FiGlobe } from 'react-icons/fi'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              เกี่ยวกับฉัน
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              สวัสดี! ฉันมีความหลงใหลในเทคโนโลยี การเขียนโปรแกรม และทุกสิ่งที่เกี่ยวข้องกับเทคโนโลยี!
            </p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-8 lg:mb-0 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/guneang.jpg"
                  alt="Sakan Wokkum"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:py-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Sakan Wokkum (Gun)
              </h2>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                652021073
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📚 ข้อมูลการศึกษา</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-bold">คณะ:</p>
                    <p>วิทยาศาสตร์และนวัตกรรมดิจิทัล</p>
                  </div>
                  <div>
                    <p className="font-bold">สาขา:</p>
                    <p>วิทยาการคอมพิวเตอร์ (B.Sc.)</p>
                  </div>
                  <div>
                    <p className="font-bold">วันเกิด:</p>
                    <p>24 พฤศจิกายน 2003</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            ข้อมูลส่วนตัว
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🧠 MBTI</h3>
              <p className="text-gray-600">INFP</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎮 งานอดิเรก</h3>
              <p className="text-gray-600">เขียนโค้ด, เล่นเกม, ดูหนัง, ฟังพอดแคสต์, ศึกษาด้านเทคโนโลยี</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 สีที่ชอบ</h3>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-black"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <span className="text-gray-600">(ดำและเทา)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            ทักษะทางเทคนิค
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'HTML/CSS', 'Git'].map((skill) => (
              <div 
                key={skill}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-800 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Goal */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            เป้าหมายอาชีพ
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            "อะไรก็ได้ที่ฉันชอบ"
          </p>
        </div>
      </div>
    </div>
  )
}
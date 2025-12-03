'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

interface BlogPost {
  id: string
  title: string
  date: string
  image: string
}

export default function CentilioBlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Creating template',
      date: 'Jan 12,2024',
      image: '/images/centilioblogpage/blog-placeholder-1.png'
    },
    {
      id: '2',
      title: 'Brand your account on Centilio',
      date: 'May 1, 2024',
      image: '/images/centilioblogpage/blog-placeholder-2.png'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/centilioblogpage/centilio logo vERSION 1 (1).png"
              alt="Centilio Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/products" className="text-white hover:text-gray-300 transition-colors">Products</Link>
            <Link href="/industries" className="text-white hover:text-gray-300 transition-colors">Industries</Link>
            <Link href="/customers" className="text-white hover:text-gray-300 transition-colors">Customers</Link>
            <Link href="/partners" className="text-white hover:text-gray-300 transition-colors">Partners</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-gray-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/sign-in" className="text-white hover:text-gray-300 transition-colors">Sign In</Link>
            <Link
              href="/sign-up"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #34A853, #EA4435, #FBBC05, #4285F4) border-box',
                border: '2px solid transparent'
              }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section - Blog Title */}
      <section className="py-20 bg-[#0E0F18]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">Blog</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                {/* Blog Card */}
                <div className="border border-gray-700 rounded-3xl overflow-hidden hover:border-gray-600 transition-colors">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-[#1A1D28] relative">
                    {/* You can add actual images here when available */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

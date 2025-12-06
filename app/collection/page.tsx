'use client';

import { collectionItems } from '@/lib/data';
import { Calendar, MapPin, Tag } from 'lucide-react';

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-antique-900 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our curated collection of rare and historic coins and notes from around the world. 
            Each piece tells a unique story of history, culture, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64 bg-gray-200">
                <img
                  src={item.images[0] || 'https://via.placeholder.com/400x400?text=Collection+Item'}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Collection+Item';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.rarity === 'extremely-rare' ? 'bg-purple-600 text-white' :
                    item.rarity === 'very-rare' ? 'bg-red-600 text-white' :
                    item.rarity === 'rare' ? 'bg-orange-600 text-white' :
                    item.rarity === 'uncommon' ? 'bg-yellow-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {item.rarity.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Tag className={`w-4 h-4 ${
                    item.category === 'coin' ? 'text-yellow-600' : 'text-green-600'
                  }`} />
                  <span className="text-sm text-gray-500 uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-antique-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year} {item.year < 0 ? 'BC' : 'AD'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Collection Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="font-serif text-3xl font-bold text-antique-900 mb-6">
            About Our Collection
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Our collection represents decades of careful curation and passion for numismatics and 
              notaphily. Each item in our collection has been authenticated by experts and represents 
              a significant piece of history.
            </p>
            <p>
              From ancient Roman coins to rare banknotes from around the world, our collection spans 
              thousands of years of monetary history. We take pride in preserving these artifacts 
              and sharing their stories with collectors and enthusiasts worldwide.
            </p>
            <p>
              Whether you're a seasoned collector or just beginning your journey into the world of 
              rare coins and notes, we invite you to explore our collection and discover the rich 
              history that each piece represents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


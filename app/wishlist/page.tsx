'use client';

import { useCart } from '@/contexts/CartContext';
import { sampleListings } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useCart();
  const wishlistItems = sampleListings.filter(item => wishlist.includes(item.id));

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-sm shadow-sm p-12 text-center">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Start adding items you love to your wishlist.</p>
            <a
              href="/buy"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-sm hover:bg-primary-700 transition-colors font-medium"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-sm shadow-sm p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            My Wishlist ({wishlistItems.length} items)
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} listing={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


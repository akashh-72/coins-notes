'use client';

import Link from 'next/link';
import { Listing } from '@/types';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  listing: Listing;
}

export default function ProductCard({ listing }: ProductCardProps) {
  const { addToCart, isInWishlist, addToWishlist, removeFromWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Use deterministic values based on listing ID to prevent hydration errors
  const pseudoRandom = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = pseudoRandom(listing.id);
  const rating = (4.2 + (seed % 10) * 0.08).toFixed(1);
  const reviews = 50 + (seed % 500);
  const discount = listing.price > 1000 ? Math.round(((listing.price * 1.2 - listing.price) / (listing.price * 1.2)) * 100) : 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(listing);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(listing.id)) {
      removeFromWishlist(listing.id);
    } else {
      addToWishlist(listing.id);
    }
  };

  return (
    <div
      className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover-lift shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/item/${listing.id}`} className="block flex-1">
        {/* Image Container */}
        <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 aspect-[3/4] overflow-hidden">
          <img
            src={listing.images[0] || 'https://via.placeholder.com/400x533?text=Product'}
            alt={listing.title}
            className={`w-full h-full object-contain p-4 sm:p-5 md:p-6 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x533?text=Product';
            }}
          />

          {/* Wishlist Button - Appears on hover */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 p-2.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 z-10 ${isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 lg:opacity-0 lg:translate-x-2 lg:scale-95 opacity-100 translate-x-0 scale-100'
              } ${isInWishlist(listing.id) ? 'text-red-500' : 'text-neutral-600 hover:text-red-500'}`}
            aria-label={isInWishlist(listing.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isInWishlist(listing.id) ? 'fill-current' : ''}`} />
          </button>

          {/* Badge - Only if rare or discount */}
          {(listing.rarity === 'extremely-rare' || listing.rarity === 'very-rare') && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-lg">
                RARE
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5 md:p-6 space-y-2.5 sm:space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-900">{rating}</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-500">({reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] group-hover:text-primary-600 transition-colors duration-200 leading-snug">
            {listing.title}
          </h3>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl sm:text-2xl font-bold text-neutral-900">${listing.price.toLocaleString()}</span>
              {discount > 0 && (
                <span className="text-base sm:text-lg text-neutral-500 line-through">
                  ${(listing.price * 1.2).toLocaleString()}
                </span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-xs sm:text-sm font-medium text-green-600">
                Was ${(listing.price * 1.2).toLocaleString()} • Save {discount}%
              </p>
            )}
          </div>

          {/* Condition */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
            <span className="capitalize">{listing.condition.replace('-', ' ')}</span>
            <span>•</span>
            <span>{listing.year}</span>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 mt-auto">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-[0.98] ${isAdding ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          aria-label="Add to cart"
        >
          {isAdding ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 flex-shrink-0" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

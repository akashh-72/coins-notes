'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { sampleListings } from '@/lib/data';
import { Calendar, MapPin, Shield, Star, ShoppingCart, Heart, Check, ZoomIn, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ItemDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToCart, isInWishlist, addToWishlist, removeFromWishlist } = useCart();

  const listing = sampleListings.find(item => item.id === params.id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Item Not Found</h1>
          <Link href="/buy" className="text-primary-600 hover:text-primary-700 font-medium">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const rating = (4.2 + Math.random() * 0.8).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 50;
  const discount = listing.price > 1000 ? Math.round(((listing.price * 1.2 - listing.price) / (listing.price * 1.2)) * 100) : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(listing);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-neutral-600">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/buy" className="hover:text-primary-600">Products</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{listing.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-neutral-50 rounded-lg overflow-hidden mb-4 aspect-square group">
              <img
                src={listing.images[selectedImage] || 'https://via.placeholder.com/800x800?text=Product'}
                alt={listing.title}
                className={`w-full h-full object-contain p-12 transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x800?text=Product';
                }}
              />
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute top-4 right-4 p-3 bg-white rounded-lg shadow-professional-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="w-5 h-5 text-neutral-700" />
              </button>
            </div>
            {listing.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-neutral-50 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-primary-500' : 'border-transparent hover:border-neutral-300'
                      }`}
                  >
                    <img
                      src={image || 'https://via.placeholder.com/200x200?text=Product'}
                      alt={`${listing.title} ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200?text=Product';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                {listing.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif leading-tight">
                {listing.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg text-neutral-900">{rating}</span>
                </div>
                <span className="text-neutral-600">({reviews.toLocaleString()} reviews)</span>
                <span className="text-neutral-400">•</span>
                <Link href="#reviews" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  View all reviews
                </Link>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-3">
                <span className="text-4xl sm:text-5xl font-bold text-neutral-900">${listing.price.toLocaleString()}</span>
                {discount > 0 && (
                  <>
                    <span className="text-xl sm:text-2xl text-neutral-500 line-through">
                      ${(listing.price * 1.2).toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1.5 rounded-md">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              {discount > 0 && (
                <p className="text-base sm:text-lg text-green-600 font-semibold">
                  You save ${((listing.price * 1.2) - listing.price).toLocaleString()}
                </p>
              )}
            </div>

            {/* Product Specifications */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-base">
                <Calendar className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-700"><strong className="text-neutral-900">Year:</strong> {listing.year}</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <MapPin className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-700"><strong className="text-neutral-900">Country:</strong> {listing.country}</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <Shield className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-700"><strong className="text-neutral-900">Condition:</strong> <span className="capitalize font-semibold">{listing.condition.replace('-', ' ')}</span></span>
              </div>
              <div className="text-base">
                <span className="text-neutral-700"><strong className="text-neutral-900">Rarity:</strong> <span className="capitalize font-semibold">{listing.rarity.replace('-', ' ')}</span></span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <h3 className="font-bold text-lg text-neutral-900 mb-4">Description</h3>
              <p className="text-neutral-700 leading-relaxed text-base">{listing.description}</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-neutral-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border-2 border-neutral-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 border-x-2 border-neutral-300 min-w-[80px] text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors text-lg shadow-professional-lg hover:shadow-professional-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => isInWishlist(listing.id) ? removeFromWishlist(listing.id) : addToWishlist(listing.id)}
                  className={`p-4 border-2 rounded-lg transition-colors ${isInWishlist(listing.id)
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-neutral-300 text-neutral-600 hover:border-red-500 hover:text-red-500'
                    }`}
                >
                  <Heart className={`w-6 h-6 ${isInWishlist(listing.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Trust Features */}
            <div className="bg-neutral-50 rounded-lg p-6 space-y-3">
              {[
                '100% Authentic Guaranteed',
                'Free Insured Shipping on orders over $500',
                'Secure Payment Processing',
                '30-Day Return Policy',
                'Certificate of Authenticity Included',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-base">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 font-serif">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
            {sampleListings.filter(item => item.id !== listing.id).slice(0, 6).map((item) => (
              <div key={item.id} className="animate-fade-in">
                <ProductCard listing={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

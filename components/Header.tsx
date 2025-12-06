'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Heart, User, ChevronDown, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const { getTotalItems, wishlist } = useCart();

  const announcements = [
    { icon: Truck, text: "Free Shipping on orders above $500" },
    { icon: Shield, text: "Verified Authentic Products" },
    { icon: RotateCcw, text: "30-Day Easy Returns" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Premium Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white border-b border-primary-400/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View (All Items) */}
          <div className="hidden md:flex items-center justify-center gap-8 py-2.5">
            <div className="flex items-center gap-2.5 group cursor-default hover:opacity-100 opacity-90 transition-opacity">
              <Truck className="w-4 h-4 text-white/90" />
              <span className="text-xs font-medium tracking-wide">Free Shipping on orders above $500</span>
            </div>
            <span className="text-white/20 text-lg font-light">•</span>
            <div className="flex items-center gap-2.5 group cursor-default hover:opacity-100 opacity-90 transition-opacity">
              <Shield className="w-4 h-4 text-white/90" />
              <span className="text-xs font-medium tracking-wide">Verified Authentic Products</span>
            </div>
            <span className="text-white/20 text-lg font-light">•</span>
            <div className="flex items-center gap-2.5 group cursor-default hover:opacity-100 opacity-90 transition-opacity">
              <RotateCcw className="w-4 h-4 text-white/90" />
              <span className="text-xs font-medium tracking-wide">30-Day Easy Returns</span>
            </div>
          </div>

          {/* Mobile View (Rotating) */}
          <div className="md:hidden h-10 relative flex items-center justify-center overflow-hidden">
            {announcements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center gap-2.5 transition-all duration-500 transform ${index === currentAnnouncement
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 text-white/90" />
                  <span className="text-xs font-medium tracking-wide">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white border-b border-neutral-200 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-neutral-100' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Logo, Search, Actions */}
          <div className="flex items-center gap-4 lg:gap-6 py-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                <span className="text-white font-bold text-lg sm:text-xl">₿</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900 font-serif leading-tight group-hover:text-primary-600 transition-colors duration-200">
                  RareCoins
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium tracking-wide">
                  Premium Collectibles
                </div>
              </div>
            </Link>

            {/* Search Bar - Centered and Prominent */}
            <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4 lg:mx-8">
              <form className="relative flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search for coins, notes, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-neutral-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 text-sm sm:text-base text-neutral-900 placeholder-neutral-400 transition-all duration-200 bg-neutral-50 focus:bg-white"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-r-lg transition-all duration-200 font-medium flex items-center justify-center shadow-sm hover:shadow-md active:scale-95"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </div>

            {/* Right Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/account"
                className="flex flex-col items-center justify-center px-3 py-2 hover:text-primary-600 transition-colors duration-200 group relative"
                aria-label="Account"
              >
                <div className="relative p-2 rounded-lg group-hover:bg-primary-50 transition-all duration-200">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] mt-0.5 font-medium text-neutral-600 group-hover:text-primary-600">
                  Account
                </span>
              </Link>

              <Link
                href="/wishlist"
                className="flex flex-col items-center justify-center px-3 py-2 hover:text-primary-600 transition-colors duration-200 group relative"
                aria-label="Wishlist"
              >
                <div className="relative p-2 rounded-lg group-hover:bg-primary-50 transition-all duration-200">
                  <Heart className="w-5 h-5" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold px-1">
                      {wishlist.length > 99 ? '99+' : wishlist.length}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-0.5 font-medium text-neutral-600 group-hover:text-primary-600">
                  Wishlist
                </span>
              </Link>

              <Link
                href="/cart"
                className="flex flex-col items-center justify-center px-3 py-2 hover:text-primary-600 transition-colors duration-200 group relative"
                aria-label="Cart"
              >
                <div className="relative p-2 rounded-lg group-hover:bg-primary-50 transition-all duration-200">
                  <ShoppingBag className="w-5 h-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-primary-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold px-1">
                      {getTotalItems() > 99 ? '99+' : getTotalItems()}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-0.5 font-medium text-neutral-600 group-hover:text-primary-600">
                  Cart
                </span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2 ml-auto">
              <button
                className="relative p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                aria-label="Search"
                onClick={() => {
                  // Focus search in mobile menu if needed
                  setIsMenuOpen(false);
                }}
              >
                <Search className="w-6 h-6" />
              </button>
              <Link
                href="/cart"
                className="relative p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                aria-label="Cart"
              >
                <ShoppingBag className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-primary-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold px-1">
                    {getTotalItems() > 99 ? '99+' : getTotalItems()}
                  </span>
                )}
              </Link>
              <button
                className="p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 py-3.5 border-t border-neutral-100">
            <Link
              href="/buy"
              className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
              onMouseEnter={() => setHoveredCategory('all')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              All Products
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300"></span>
            </Link>

            <Link
              href="/buy?category=coin"
              className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
              onMouseEnter={() => setHoveredCategory('coins')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              Coins
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300"></span>
            </Link>

            <Link
              href="/buy?category=note"
              className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
              onMouseEnter={() => setHoveredCategory('notes')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              Notes
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300"></span>
            </Link>

            <Link
              href="/buy?rarity=rare"
              className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
            >
              Investment Grade
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300"></span>
            </Link>

            <Link
              href="/collection"
              className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
            >
              Collection
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300"></span>
            </Link>

            <div className="relative group ml-auto">
              <button className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1.5">
                More
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white animate-slide-down overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
              <span className="font-bold text-lg text-neutral-900">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {/* Mobile Search Bar */}
              <div className="mb-6">
                <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Search for coins, notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 w-full px-4 py-3 border-2 border-neutral-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 text-base text-neutral-900 placeholder-neutral-400 transition-all duration-200 bg-neutral-50 focus:bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-r-lg transition-all duration-200 flex items-center justify-center"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <Link
                href="/buy"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/buy?category=coin"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Coins
              </Link>
              <Link
                href="/buy?category=note"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Notes
              </Link>
              <Link
                href="/buy?rarity=rare"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Investment Grade
              </Link>
              <Link
                href="/collection"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <div className="border-t border-neutral-200 my-4"></div>
              <Link
                href="/account"
                className="flex items-center gap-3 py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center justify-between py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="flex items-center justify-between py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors duration-200 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Cart</span>
                {getTotalItems() > 0 && (
                  <span className="bg-primary-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

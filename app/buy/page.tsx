'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { sampleListings } from '@/lib/data';
import { Listing } from '@/types';
import ProductCard from '@/components/ProductCard';

export default function BuyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coin' | 'note'>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'year-asc' | 'year-desc'>('price-asc');
  const [showFilters, setShowFilters] = useState(false);

  const filteredListings = useMemo(() => {
    let filtered: Listing[] = sampleListings.filter(item => item.status === 'available');

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedRarity !== 'all') {
      filtered = filtered.filter(item => item.rarity === selectedRarity);
    }

    if (selectedCondition !== 'all') {
      filtered = filtered.filter(item => item.condition === selectedCondition);
    }

    filtered = filtered.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'year-asc': return a.year - b.year;
        case 'year-desc': return b.year - a.year;
        default: return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedRarity, selectedCondition, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedRarity('all');
    setSelectedCondition('all');
    setPriceRange([0, 20000]);
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || selectedRarity !== 'all' || selectedCondition !== 'all' || priceRange[1] < 20000;

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3 font-serif">All Products</h1>
          <p className="text-lg text-neutral-600">Discover rare coins and notes from around the world</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-professional p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for coins, notes, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3.5 border-2 border-neutral-200 rounded-lg flex items-center gap-2 hover:bg-neutral-50 transition-colors font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-80 bg-white rounded-lg shadow-professional p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-neutral-900">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-neutral-900 mb-4">Category</h4>
              <div className="space-y-3">
                {['all', 'coin', 'note'].map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'coin' | 'note')}
                      className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                      {cat === 'all' ? 'All Categories' : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-neutral-900 mb-4">Price Range</h4>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-semibold text-neutral-700">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Rarity */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-neutral-900 mb-4">Rarity</h4>
              <div className="space-y-3">
                {['all', 'common', 'uncommon', 'rare', 'very-rare', 'extremely-rare'].map((rarity) => (
                  <label key={rarity} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="rarity"
                      value={rarity}
                      checked={selectedRarity === rarity}
                      onChange={(e) => setSelectedRarity(e.target.value)}
                      className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                      {rarity === 'all' ? 'All Rarities' : rarity.replace('-', ' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-neutral-900 mb-4">Condition</h4>
              <div className="space-y-3">
                {['all', 'mint', 'excellent', 'very-good', 'good', 'fair'].map((condition) => (
                  <label key={condition} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="condition"
                      value={condition}
                      checked={selectedCondition === condition}
                      onChange={(e) => setSelectedCondition(e.target.value)}
                      className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                      {condition === 'all' ? 'All Conditions' : condition.replace('-', ' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)}></div>
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-neutral-900">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-neutral-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Filter Content - Same as Desktop but in drawer */}
                {/* Category */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4">Category</h4>
                  <div className="space-y-3">
                    {['all', 'coin', 'note'].map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'coin' | 'note')}
                          className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                          {cat === 'all' ? 'All Categories' : cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm font-semibold text-neutral-700">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Rarity */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4">Rarity</h4>
                  <div className="space-y-3">
                    {['all', 'common', 'uncommon', 'rare', 'very-rare', 'extremely-rare'].map((rarity) => (
                      <label key={rarity} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="rarity"
                          value={rarity}
                          checked={selectedRarity === rarity}
                          onChange={(e) => setSelectedRarity(e.target.value)}
                          className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                          {rarity === 'all' ? 'All Rarities' : rarity.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4">Condition</h4>
                  <div className="space-y-3">
                    {['all', 'mint', 'excellent', 'very-good', 'good', 'fair'].map((condition) => (
                      <label key={condition} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="condition"
                          value={condition}
                          checked={selectedCondition === condition}
                          onChange={(e) => setSelectedCondition(e.target.value)}
                          className="mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-neutral-700 group-hover:text-neutral-900 capitalize font-medium">
                          {condition === 'all' ? 'All Conditions' : condition.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <button
                    onClick={() => {
                      clearFilters();
                      setShowFilters(false);
                    }}
                    className="w-full py-3 text-primary-600 font-bold border-2 border-primary-600 rounded-lg mb-3"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full py-3 bg-primary-600 text-white font-bold rounded-lg"
                  >
                    Show Results
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white rounded-lg shadow-professional p-4 mb-6 flex items-center justify-between">
              <div className="text-base text-neutral-700 font-medium">
                {filteredListings.length} {filteredListings.length === 1 ? 'product' : 'products'} found
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-600 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border-2 border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-medium"
                >
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="year-asc">Year: Oldest First</option>
                  <option value="year-desc">Year: Newest First</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
                {filteredListings.map((listing, index) => (
                  <div key={listing.id} className="animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
                    <ProductCard listing={listing} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-professional p-16 text-center">
                <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-neutral-400" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">No products found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

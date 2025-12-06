
import Link from 'next/link';
import { sampleListings } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Star, Shield, Truck, Check, ChevronRight, CreditCard, Headphones } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const featuredItems = sampleListings.slice(0, 12);
  const dealsItems = sampleListings.filter(item => item.price > 2000).slice(0, 8);
  const newArrivals = sampleListings.slice(0, 8);
  const bestSellers = sampleListings.filter(item => item.rarity === 'rare' || item.rarity === 'very-rare').slice(0, 8);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Full Width Background */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_coins_background.png"
            alt="Rare coins collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="tracking-wide uppercase text-xs sm:text-sm">Premium Global Marketplace</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] font-serif tracking-tight text-white drop-shadow-lg">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">Rare</span> & Authentic Collectibles
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
              Explore our curated collection of certified rare coins and vintage banknotes. Verified by experts for the serious collector.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-16">
              <Link
                href="/buy"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary-600 text-white px-8 sm:px-10 py-4 rounded-full font-bold hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30 text-base sm:text-lg hover:scale-105 active:scale-95 ring-4 ring-primary-600/20"
              >
                <span>Start Collecting</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/sell"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 sm:px-10 py-4 rounded-full font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-base sm:text-lg hover:scale-105 active:scale-95"
              >
                <span>Sell Your Item</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-12 max-w-3xl mx-auto border-t border-white/10 pt-8 sm:pt-10">
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-2xl font-bold text-white">100%</span>
                  <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Authentic</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-2xl font-bold text-white">Free</span>
                  <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Shipping</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-2xl font-bold text-white">Expert</span>
                  <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4 font-serif tracking-tight">
              Featured Collections
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Curated categories of rare and authentic collectibles
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Ancient Coins',
                desc: 'Roman, Greek & Byzantine',
                href: '/buy?category=coin&rarity=extremely-rare',
                image: '/collection_ancient_coins.png'
              },
              {
                title: 'Rare Banknotes',
                desc: 'Historic paper currency',
                href: '/buy?category=note&rarity=rare',
                image: '/collection_rare_banknotes.png'
              },
              {
                title: 'Gold Sovereigns',
                desc: 'British & world gold coins',
                href: '/buy?category=coin&rarity=very-rare',
                image: '/collection_gold_sovereigns.png'
              },
              {
                title: 'Investment Grade',
                desc: 'High-value collectibles',
                href: '/buy?rarity=very-rare',
                image: '/collection_investment_grade.png'
              },
            ].map((collection, index) => (
              <Link
                key={index}
                href={collection.href}
                className="group relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                    {collection.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 transform translate-y-0 opacity-90 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white">
                    {collection.desc}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 w-8 h-1 bg-primary-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 space-y-24">

        {/* Deals of the Day */}
        {dealsItems.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 text-xs font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <span className="uppercase tracking-wider">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif">
                Deals of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Day</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <p className="text-lg text-neutral-600">Don't miss out on these exclusive offers</p>
                <Link href="/buy" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 group">
                  View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {dealsItems.map((item, index) => (
                <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 50} ms` }}>
                  <ProductCard listing={item} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 text-xs font-medium mb-4">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="uppercase tracking-wider">Most Popular</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif">
                Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Sellers</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <p className="text-lg text-neutral-600">The most sought-after items this week</p>
                <Link href="/buy" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 group">
                  View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {bestSellers.map((item, index) => (
                <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 50} ms` }}>
                  <ProductCard listing={item} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="uppercase tracking-wider">Just Arrived</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif">
                New <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Arrivals</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <p className="text-lg text-neutral-600">Fresh additions to our collection</p>
                <Link href="/buy" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 group">
                  View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {newArrivals.map((item, index) => (
                <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 50} ms` }}>
                  <ProductCard listing={item} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Featured Products */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 text-xs font-medium mb-4">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="uppercase tracking-wider">Curated Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Products</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <p className="text-lg text-neutral-600">Handpicked items for the discerning collector</p>
              <Link href="/buy" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 group">
                View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {featuredItems.map((item, index) => (
              <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard listing={item} />
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Social Proof - Premium Dark Design */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Background with Gradient and Overlay */}
          <div className="absolute inset-0 bg-neutral-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Column: Stats & Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-medium mb-6 backdrop-blur-sm">
                  <Star className="w-3 h-3 fill-yellow-500" />
                  <span className="uppercase tracking-wider">World Class Reputation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                  Trusted by the World's Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Collectors</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-xl">
                  Join a community of passionate numismatists. We verify every item to ensure your collection grows with authentic, high-value pieces.
                </p>

                <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50K+</div>
                    <div className="text-sm text-yellow-600/80 uppercase tracking-wider font-medium">Collectors</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">99.8%</div>
                    <div className="text-sm text-yellow-600/80 uppercase tracking-wider font-medium">Authentic</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">$50M+</div>
                    <div className="text-sm text-yellow-600/80 uppercase tracking-wider font-medium">Sold</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Testimonials (Vertical Stack) */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: 'John Davis', role: 'Collector since 2015', text: 'Found an incredible 1943 steel penny. The authentication process was thorough.', initial: 'JD' },
                  { name: 'Sarah Martinez', role: 'Numismatist', text: 'The platform makes it so easy to buy and sell. I\'ve built an amazing collection.', initial: 'SM' },
                  { name: 'Michael Roberts', role: 'Dealer', text: 'Outstanding customer service. Every purchase has exceeded my expectations.', initial: 'MR' },
                ].map((testimonial, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-x-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-yellow-500/20">
                        {testimonial.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <p className="text-sm sm:text-base text-neutral-300 mb-3 leading-relaxed">"{testimonial.text}"</p>
                        <div>
                          <div className="font-bold text-white text-sm">{testimonial.name}</div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Premium Dark Design */}
        <section className="py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-serif">Why Choose RareCoins?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Expertise meets modern technology</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: 'Authentic', desc: 'Verified by experts' },
              { icon: Truck, title: 'Free Ship', desc: 'Orders over $500' },
              { icon: CreditCard, title: 'Secure', desc: '100% Protected' },
              { icon: Headphones, title: 'Support', desc: '24/7 Assistance' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative p-6 sm:p-8 rounded-2xl bg-neutral-900 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300 shadow-lg">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-serif tracking-wide">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </div >
    </div >
  );
}

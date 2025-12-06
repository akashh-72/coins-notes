'use client';

import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-neutral-400" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-3 font-serif">Your cart is empty</h1>
            <p className="text-neutral-600 mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg shadow-professional-lg"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-neutral-900 mb-10 font-serif">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 bg-white rounded-lg shadow-professional p-8">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
              <span className="text-neutral-600 font-medium">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
              >
                Clear cart
              </button>
            </div>

            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 border-b border-neutral-200 last:border-0">
                  <Link href={`/item/${item.id}`} className="w-full sm:w-32 aspect-square sm:h-32 bg-neutral-50 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0] || 'https://via.placeholder.com/128?text=Product'}
                      alt={item.title}
                      className="w-full h-full object-contain p-3"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/128?text=Product';
                      }}
                    />
                  </Link>
                  <div className="flex-1">
                    <Link href={`/item/${item.id}`}>
                      <h3 className="text-lg font-semibold text-neutral-900 hover:text-primary-600 transition-colors mb-2">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-neutral-600 mb-4">{item.country} • {item.year}</p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3 border-2 border-neutral-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-4 py-2 hover:bg-neutral-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-6 py-2 border-x-2 border-neutral-300 min-w-[60px] text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-4 py-2 hover:bg-neutral-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-6 ml-auto sm:ml-0">
                        <span className="text-2xl font-bold text-neutral-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 p-2 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 bg-white rounded-lg shadow-professional p-8 h-fit lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-base">
                <span className="text-neutral-600">Subtotal ({getTotalItems()} items)</span>
                <span className="text-neutral-900 font-semibold">${getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-neutral-600">Shipping</span>
                <span className="text-neutral-900 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-neutral-600">Tax</span>
                <span className="text-neutral-900 font-semibold">Calculated at checkout</span>
              </div>
              <div className="border-t-2 border-neutral-200 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-neutral-900">Total</span>
                  <span className="text-neutral-900">${getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-primary-500 text-white text-center py-4 rounded-lg hover:bg-primary-600 transition-colors font-bold text-lg mb-4 shadow-professional-lg"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/buy"
              className="block w-full border-2 border-neutral-300 text-neutral-700 text-center py-4 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
            >
              Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-neutral-200 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Secure checkout</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <span>🚚</span>
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <span>↩️</span>
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

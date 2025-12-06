import { Award, Users, Shield, Globe, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-antique-50 via-primary-50 to-antique-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-antique-900 mb-6">
            About RareCoins
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connecting collectors worldwide with authentic rare coins and notes since 2020. 
            We're passionate about preserving history and helping you build your collection.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-antique-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-6 text-lg leading-relaxed">
            <p>
              RareCoins was founded in 2020 by a group of passionate numismatists and collectors 
              who recognized the need for a trusted, modern platform for buying and selling rare 
              coins and notes. What started as a small community of enthusiasts has grown into a 
              global marketplace connecting thousands of collectors.
            </p>
            <p>
              Our mission is simple: to make rare coin and note collecting accessible to everyone 
              while maintaining the highest standards of authenticity and quality. We believe that 
              every coin and note tells a story, and we're here to help preserve those stories for 
              future generations.
            </p>
            <p>
              Over the years, we've built relationships with collectors, dealers, and experts 
              worldwide. Our team carefully verifies each listing to ensure authenticity, and we 
              provide detailed information to help you make informed decisions about your collection.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-antique-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Authenticity</h3>
              <p className="text-gray-600">
                Every item is verified by our team of experts to ensure you're getting genuine collectibles.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in curating and presenting rare coins and notes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Community</h3>
              <p className="text-gray-600">
                Building a vibrant community of collectors who share knowledge and passion.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Connecting collectors from around the world to discover rare items from every continent.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Passion</h3>
              <p className="text-gray-600">
                Driven by our love for numismatics and the stories that each coin and note represents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to providing the best experience for both buyers and sellers on our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-antique-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">JD</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">John Doe</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                30+ years of numismatic expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">SM</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Sarah Miller</h3>
              <p className="text-primary-600 mb-2">Head of Authentication</p>
              <p className="text-gray-600 text-sm">
                Certified numismatist and historian
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">MR</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Michael Roberts</h3>
              <p className="text-primary-600 mb-2">Curator</p>
              <p className="text-gray-600 text-sm">
                Specialist in ancient and medieval coins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Whether you're buying, selling, or just exploring, we're here to help you on your collecting journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/buy"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Start Browsing
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition font-semibold text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


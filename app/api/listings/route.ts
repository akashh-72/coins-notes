import { NextRequest, NextResponse } from 'next/server';
import { sampleListings } from '@/lib/data';
import { Listing } from '@/types';

// GET - Fetch all listings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'available';

    let filteredListings = sampleListings.filter(item => item.status === status);

    if (category && category !== 'all') {
      filteredListings = filteredListings.filter(item => item.category === category);
    }

    return NextResponse.json({ listings: filteredListings }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

// POST - Create a new listing
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'category', 'year', 'country', 'seller'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new listing
    const newListing: Listing = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      price: parseFloat(body.price),
      category: body.category,
      condition: body.condition || 'excellent',
      year: parseInt(body.year),
      country: body.country,
      images: body.images || [],
      seller: {
        name: body.seller.name || body.sellerName,
        email: body.seller.email || body.sellerEmail,
        phone: body.seller.phone || body.sellerPhone,
      },
      createdAt: new Date().toISOString().split('T')[0],
      status: 'available',
      rarity: body.rarity || 'rare',
    };

    // In a real app, you would save this to a database
    // For now, we'll just return success
    return NextResponse.json(
      { 
        message: 'Listing created successfully',
        listing: newListing 
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}


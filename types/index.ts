export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'coin' | 'note';
  condition: 'mint' | 'excellent' | 'very-good' | 'good' | 'fair';
  year: number;
  country: string;
  images: string[];
  seller: {
    name: string;
    email: string;
    phone?: string;
  };
  createdAt: string;
  status: 'available' | 'sold' | 'pending';
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'extremely-rare';
}

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  year: number;
  country: string;
  images: string[];
  category: 'coin' | 'note';
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'extremely-rare';
}


export interface Destination {
  id: number
  title: string
  imageUrl: string
  category: string
  location: string
  price: number
  rating: number
  duration: string
  description: string
  highlights: string[]
  bestTime: string
  difficulty: string
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Misty Mountains",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    category: "mountain",
    location: "Swiss Alps",
    price: 1200,
    rating: 4.8,
    duration: "5 days",
    description: "Breathtaking mountain views, perfect for hiking and adventure.",
    highlights: ["Alpine hiking", "Mountain photography", "Local cuisine", "Scenic train rides"],
    bestTime: "June - September",
    difficulty: "Moderate"
  },
  {
    id: 2,
    title: "Sunny Beach",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    category: "beach",
    location: "Maldives",
    price: 2500,
    rating: 4.9,
    duration: "7 days",
    description: "Relax on golden sands and swim in crystal clear waters.",
    highlights: ["Snorkeling", "Sunset cruises", "Beach yoga", "Island hopping"],
    bestTime: "November - April",
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Enchanted Forest",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    category: "forest",
    location: "Black Forest, Germany",
    price: 800,
    rating: 4.6,
    duration: "4 days",
    description: "Wander through lush green forests and discover hidden wildlife.",
    highlights: ["Forest trails", "Wildlife watching", "Local villages", "Traditional food"],
    bestTime: "May - October",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Desert Dunes",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    category: "desert",
    location: "Sahara Desert",
    price: 1500,
    rating: 4.7,
    duration: "6 days",
    description: "Experience the vast beauty and tranquility of the desert.",
    highlights: ["Camel trekking", "Desert camping", "Stargazing", "Berber culture"],
    bestTime: "October - April",
    difficulty: "Moderate"
  },
  {
    id: 5,
    title: "Mountain Lake",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    category: "mountain",
    location: "Lake Louise, Canada",
    price: 1800,
    rating: 4.9,
    duration: "5 days",
    description: "A serene lake surrounded by towering peaks.",
    highlights: ["Lake kayaking", "Mountain biking", "Wildlife tours", "Photography"],
    bestTime: "June - September",
    difficulty: "Easy"
  },
  {
    id: 6,
    title: "Tropical Paradise",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    category: "beach",
    location: "Bora Bora",
    price: 3500,
    rating: 5.0,
    duration: "8 days",
    description: "Palm trees, turquoise water, and endless sunshine.",
    highlights: ["Overwater bungalows", "Scuba diving", "Polynesian culture", "Luxury spa"],
    bestTime: "May - October",
    difficulty: "Easy"
  },
  {
    id: 7,
    title: "Ancient Ruins",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    category: "history",
    location: "Machu Picchu, Peru",
    price: 2200,
    rating: 4.8,
    duration: "7 days",
    description: "Explore the mysterious ancient Incan citadel.",
    highlights: ["Inca Trail", "Archaeological sites", "Andean culture", "Mountain views"],
    bestTime: "April - October",
    difficulty: "Challenging"
  },
  {
    id: 8,
    title: "Adventure Park",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    category: "fun",
    location: "Queenstown, New Zealand",
    price: 2800,
    rating: 4.9,
    duration: "6 days",
    description: "Thrilling adventures in the adventure capital of the world.",
    highlights: ["Bungee jumping", "Skydiving", "Jet boating", "Hiking"],
    bestTime: "December - February",
    difficulty: "Moderate"
  }
] 
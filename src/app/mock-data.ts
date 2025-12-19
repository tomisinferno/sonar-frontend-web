// src/app/mock-data.ts
export interface User {
  name: string;
  handle: string;
  bio: string;
  location: string;
  website: string;
  joinedDate: string;
  stats: {
    following: number;
    followers: number;
    tracks: number;
  };
}

export interface Post {
  user: { name: string; handle: string };
  content: string;
  track?: { title: string; artist: string; coverUrl: string; duration: string };
  stats: { likes: number; comments: number; reposts: number };
  timestamp: string;
}

export const mockUser: User = {
  name: 'Alex Rivers',
  handle: 'alexrivers',
  bio: "Music producer & DJ 🎧 Always searching for the next perfect beat. LA based. Let's create something beautiful together.",
  location: 'Los Angeles, CA',
  website: 'https://alexrivers.com',
  joinedDate: 'March 2021',
  stats: { following: 342, followers: 12400, tracks: 89 },
};

export const mockPosts: Post[] = [
  {
    user: { name: 'Alex Rivers', handle: 'alexrivers' },
    content:
      "Just finished my new track! Can't wait to share it with you all. This one's different. 🎹",
    track: {
      title: 'Neon Dreams',
      artist: 'Alex Rivers',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      duration: '4:12',
    },
    stats: { likes: 2341, comments: 189, reposts: 456 },
    timestamp: '2h',
  },
  {
    user: { name: 'Alex Rivers', handle: 'alexrivers' },
    content:
      'Studio session was fire today 🔥 Sometimes the best music comes when you least expect it.',
    stats: { likes: 1567, comments: 78, reposts: 234 },
    timestamp: '1d',
  },
  {
    user: { name: 'Alex Rivers', handle: 'alexrivers' },
    content:
      'This track changed my life when I first heard it. Still gives me chills every single time.',
    track: {
      title: 'Innerbloom',
      artist: 'RÜFÜS DU SOL',
      coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
      duration: '9:38',
    },
    stats: { likes: 3456, comments: 234, reposts: 567 },
    timestamp: '3d',
  },
];

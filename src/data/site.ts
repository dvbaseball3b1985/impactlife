export const site = {
  name: 'Impact Life',
  tagline: 'Church in living rooms, around tables, across the city.',
  email: 'impactlife@hotmail.com',
  phone: '682-352-2145',
  address: '601 SW Alsbury Blvd, Burleson, TX 76028',
  facebook: 'https://www.facebook.com/ImpactLifeC',
  instagram: 'https://www.instagram.com/impactlifefamilychurch',
  location: {
    street: '601 SW Alsbury Blvd',
    city: 'Burleson',
    state: 'TX',
    zip: '76028',
    country: 'US',
  },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/home-churches', label: 'Find a Home Church' },
  { href: '/host', label: 'Host a Church' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

type HomeChurch = { name: string; day: string; time: string; area?: string; kids?: boolean };

export const homeChurches: HomeChurch[] = [
  { name: "Men's Alsbury Group", day: 'Sunday', time: '9:30 AM' },
  { name: "Women's Alsbury Group", day: 'Tuesday', time: '6:00 PM' },
  { name: 'Mixed Gayle St Group', day: 'Thursday', time: '6:00 PM' },
];

// Use `date` (YYYY-MM-DD) for one-time events, or `weekday` for weekly ones.
type Event = { title: string; location: string; description: string; date?: string; weekday?: string };

export const events: Event[] = [
  {
    weekday: 'Sunday',
    title: 'All-Church Gathering',
    location: 'Impact Life Church',
    description: 'Every home church together for worship, a meal, and stories.',
  },
];

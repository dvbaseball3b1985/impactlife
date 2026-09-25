export const site = {
  name: 'Impact Life',
  tagline: 'Church in living rooms, around tables, across the city.',
  email: 'impactlife@hotmail.com',
  phone: '682-352-2145',
  address: '601 SW Alsbury Blvd, Burleson, TX 76028',
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
  { name: "Women's Alsbury Group", day: 'Wednesday', time: '6:00 PM' },
  { name: 'Mixed Gayle St Group', day: 'Thursday', time: '6:00 PM' },
];

export const events = [
  {
    date: '2026-10-11',
    title: 'All-Church Gathering',
    location: 'City Park Pavilion',
    description: 'Every home church together for worship, a meal, and stories.',
  },
  {
    date: '2026-10-25',
    title: 'Host Training Night',
    location: 'Online',
    description: 'For anyone thinking about opening their home. Q&A with current hosts.',
  },
  {
    date: '2026-11-08',
    title: 'Serve the City Day',
    location: 'Various locations',
    description: 'Home churches partner with local organizations for a day of service.',
  },
];

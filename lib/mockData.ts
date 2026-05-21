export const dashboardStats = [
  { title: 'Total Following', value: '9,512', change: '+12%' },
  { title: 'Total Followers', value: '8,402', change: '+8%' },
  { title: 'Non-followers', value: '1,274', change: '-4%' },
  { title: 'Recent Unfollowers', value: '18', change: 'live' },
  { title: 'Mutual Followers', value: '6,834', change: '+6%' },
  { title: 'Ghost Followers', value: '624', change: '-2%' },
];

export const panelItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Non Followers', href: '/non-followers' },
  { label: 'Unfollowers', href: '/unfollowers' },
  { label: 'Mutuals', href: '/mutuals' },
  { label: 'Ghost Followers', href: '/ghosts' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Settings', href: '/settings' },
];

export const smartPeers = [
  { username: '@luna.creative', followedSince: '3m ago', lastInteraction: '2w ago', status: 'Non-follower' },
  { username: '@mattias.design', followedSince: '1y ago', lastInteraction: '5d ago', status: 'Ghost follower' },
  { username: '@hannah.pm', followedSince: '8m ago', lastInteraction: '1d ago', status: 'Mutual follower' },
  { username: '@brand.story', followedSince: '2y ago', lastInteraction: '3w ago', status: 'Non-follower' },
  { username: '@sam.growth', followedSince: '5m ago', lastInteraction: '6d ago', status: 'Unfollower' },
];

export const pricingPlans = [
  { name: 'Free', price: 'Free', details: ['Limited scans', 'Basic tracking', '1 alert', 'Community support'], highlight: false },
  { name: 'Pro', price: '₹299 / month', details: ['Instant unfollow alerts', 'Unlimited tracking', 'Bulk cleanup', 'Priority support'], highlight: true },
  { name: 'Enterprise', price: 'Custom', details: ['Team workflows', 'Dedicated support', 'Advanced reporting', 'Chrome extension roadmap'], highlight: false },
];

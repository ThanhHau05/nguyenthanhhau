import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';

// Public Routes
const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: null },
];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };

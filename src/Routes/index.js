import Config from '~/Config';

//Pages
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';

// Public Routes
const PublicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.profile, component: Profile, layout: null },
];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };

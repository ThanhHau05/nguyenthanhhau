import RoutesConfig from '~/Config/routes';

//Pages
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';

// Public Routes
const PublicRoutes = [
    { path: RoutesConfig.home, component: Home },
    { path: RoutesConfig.profile, component: Profile, layout: null },
];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };

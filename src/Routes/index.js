import Config from '~/Config';

//Pages
import Home from '~/Pages/Home';
import ToolsvaCongCu from '~/Pages/ToolsvaCongCu';

// Public Routes
const PublicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.tools_va_cong_cu, component: ToolsvaCongCu },
];

// Private Routes
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };

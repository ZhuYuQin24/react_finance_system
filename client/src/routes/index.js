import { Navigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Home from '@/scenes/content/routers/home';
import Personal from '@/scenes/content/routers/personal';
import Setting from '@/scenes/content/routers/setting';
import Predictions from '@/scenes/content/routers/predictions';
import Dashboard from '@/scenes/content/routers/dashboard';
const routes = [
  //导航栏路由
  {
    //主页
    path: "/home",
    element: <Home />,
  },
  {
    //个人中心
    path: "/personal",
    element: <Personal />,
  },
  {
    //设置
    path: "/setting",
    element: <Setting />,
  },
  //侧边栏路由
  {
    path: "/predictions",
    element: <Predictions />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  }
];

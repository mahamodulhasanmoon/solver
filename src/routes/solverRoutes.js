import Main from "../Layout/Main";
import ProfileLayout from "../Layout/ProfileLayout";
import Tools from "../Layout/Tools";

import Ask from "../pages/Ask/Ask";
import PostDetails from "../pages/PostDetails/PostDetails";
import CreatePost from "../pages/CreatePost/CreatePost";
import Find from "../pages/Find/Find";
import Info from "../pages/Profiles/Info";

import UserData from "../pages/Profiles/UserData";
import CommingSoon from "../pages/shared/Errors/CommingSoon";
import NotFound from "../pages/shared/NotFound";
import Mode from "../pages/ToolsPage/Mode";
import Settings from "../pages/ToolsPage/Settings";
import AskForm from "../pages/Ask/AskForm";
import FilterPage from "../pages/FilterPage/FilterPage";
import DataDetails from "../pages/DataDetails/DataDetails";

const { createBrowserRouter } = require("react-router-dom");

const solverRoutes = createBrowserRouter([
  // solver
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
    path:'/filter',
    element: <FilterPage/>
      },
      {
        path: "/ask",
        element: <Ask />,
      },
      {
        path:'/posts/id',
        element: <PostDetails/>
      },
      {
        path:'/ask/posts/id',
        element: <PostDetails/>
      },
      {
        path:'/ask-your-problem',
        element: <AskForm/>
      },
      {
        path: "/find",
        element: <Find />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/dataDetails",
        element: <DataDetails />,
      },
    ],
  },
  // user profile layout
  {
    path: "/users",
    element: <ProfileLayout />,
    children: [
      {
        path: "*",
        element: <CommingSoon />,
      },

      {
        path:'/users/info',
        element:<Info/>
      },
      {
        path:'/users/',
        element:<UserData/>
      }
    ],
  },

  // tools layout

  {
    path: "/tools",
    element: <Tools />,
    children: [
      {
        path: "*",
        element: <CommingSoon />,
      },
      {
        path: "/tools/settings",
        element: <Settings />,
      },
      {
        path: "/tools/mode",
        element: <Mode />,
      },
    ],
  },
]);
export default solverRoutes;

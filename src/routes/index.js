import Layout from "../components/layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import PrivateNavigate from "../components/PrivateNavigate";
import Quiz from "../pages/Quiz";
import Topic from "../pages/Topic";
import Answers from "../pages/Answers";
import Result from "../pages/Result";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        element: <PrivateNavigate />,
        children: [
          {
            path: "topic",
            element: <Topic />,
          },
          {
            path: "quiz/:id",
            element: <Quiz />,
          },
          {
            path: "answers",
            element: <Answers />,
          },
          {
            path: "result/:id",
            element: <Result />,
          },
        ],
      },
    ],
  },
];

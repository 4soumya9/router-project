import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigation,
} from "react-router-dom";
import PostList, { postLoader } from "./pages/PostList";
import PostComment from "./pages/PostComment";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.css";
import Error from "./components/Error";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./components/Required-auth";
import Product from "./pages/Product";

const AppLayOut = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      {/* {isLoading & <div>Loading..</div>} */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },

          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequiredAuth>
            <PostList />
          </RequiredAuth>
        ),

        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComment />,
      },
      {
        path:"/product",
        element:<Product/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

// function App(){
//   return(
//     <BrowserRouter>
//     <Header>
//       <Routes>
//         <Route index element={<Home/>}/>
//         <Route path="/posts" element={<PostList/>}/>
//         <Route path="/posts/:postId" element={<PostComment/>}/>
//       </Routes>
//     </Header>
//     </BrowserRouter>
//   )
// }

export default App;

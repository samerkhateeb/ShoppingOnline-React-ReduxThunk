import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ErrorPage from "./layouts/ErrorPage";
import MasterPage from "./layouts/Master";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact element={<MasterPage />} errorElement=<ErrorPage />>
        <Route index element={<ProductListing />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Route>
    </>
  )
);

const App = () => {
  <></>;
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

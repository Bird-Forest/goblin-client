import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import EmptyPage from "../components/Helper/EmptyPage";

const Layout = lazy(() => import("../page/AppLayout"));
const Main = lazy(() => import("../page/HomePage"));
const ServiceLayout = lazy(() => import("../page/ServiceLayout"));
const Person = lazy(() => import("../page/ServicePerson"));
const Home = lazy(() => import("../page/ServiceHome"));
const Auth = lazy(() => import("../page/AuthPage"));
const Master = lazy(() => import("../page/MasterPage"));

const Error = lazy(() => import("../page/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="service/:city">
            <Route element={<ServiceLayout />}>
              <Route index element={<EmptyPage />} />
              <Route path="person/:category" element={<Person />} />
              <Route path="home/:category" element={<Home />} />
            </Route>
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="master" element={<Master />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import EmptyPage from "../components/Helper/EmptyPage";
import NewPassword from "../components/SignFt/NewPassword";

const Layout = lazy(() => import("../page/AppLayout"));
const Main = lazy(() => import("../page/HomePage"));
const Service = lazy(() => import("../page/ServiceLayout"));
const Person = lazy(() => import("../page/ServicePerson"));
const Home = lazy(() => import("../page/ServiceHome"));
const Master = lazy(() => import("../page/MasterPage"));
const Auth = lazy(() => import("../page/AuthLayout"));
const SignIn = lazy(() => import("../page/AuthSignIn"));
const SignUp = lazy(() => import("../page/AuthSignUp"));
const SignFt = lazy(() => import("../page/AuthSignFt"));
const SignPwd = lazy(() => import("../components/SignFt/NewPassword"));
const Error = lazy(() => import("../page/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="service/:city" element={<Service />}>
            {/* <Route element={<Service />}> */}
            <Route index element={<EmptyPage />} />
            <Route path="person/:category" element={<Person />} />
            <Route path="home/:category" element={<Home />} />
            {/* </Route> */}
          </Route>
          <Route path="auth" element={<Auth />}>
            <Route index element={<EmptyPage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forget" element={<SignFt />}>
              <Route path="password" element={<SignPwd />} />
            </Route>
          </Route>
          <Route path="master" element={<Master />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

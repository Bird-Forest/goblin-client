import { lazy } from "react";
import { Route, Routes } from "react-router";

const Layout = lazy(() => import("../page/AppLayout"));
const Main = lazy(() => import("../page/HomePage"));
const Services = lazy(() => import("../page/ServicesPage"));
const ServiceLayout = lazy(() => import("../page/ServiceLayout"));
const People = lazy(() => import("../page/ServicePeople"));
const Home = lazy(() => import("../page/ServiceHome"));
const Auth = lazy(() => import("../page/AuthPage"));
const Master = lazy(() => import("../page/MasterPage"));
const Error = lazy(() => import("../page/NotFound"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="service/:city" element={<Services />}>
          <Route element={<ServiceLayout />}>
            <Route path="people" element={<People />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="master" element={<Master />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

// const AppRouter = () => {
//   return (
//     <Suspense fallback={null}>
//       <Routes>
//         <Route index path="/" element={<Main />} />
//         {/* <Route path="/services" element={<Services />} /> */}
//         <Route path="/service">
//           <Route index element={<Services />} />
//           <Route element={<ServiceLayout />}>
//             <Route path=":city/people" element={<People />} />
//             <Route path=":city/home" element={<Home />} />
//           </Route>
//         </Route>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/master" element={<Master />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default AppRouter;

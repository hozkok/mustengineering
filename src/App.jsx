import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
import AppLayout from "./Components/AppLayout";
import AboutUs from "./Pages.jsx/AboutUs";
import Contact from "./Pages.jsx/Contact";
import ErrorComponent from "./Pages.jsx/ErrorComponent";
import HomePage from "./Pages.jsx/HomePage";
import Experience from "./Pages.jsx/Experience";
import CaseStudies from "./Pages.jsx/CaseStudies";
import Services from "./Pages.jsx/Services";
import Deneme from "./Pages.jsx/Deneme";
import { useLayoutEffect } from "react";
import Service from "./Services-Components/Service";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const router = createBrowserRouter([
  {
    element: (
      <Wrapper>
        <AppLayout />
      </Wrapper>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/experience", element: <Experience /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/case-studies", element: <CaseStudies /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/structural-design",
        element: <Service title={"Structural Design"} />,
      },
      {
        path: "/services/construction-engineering",
        element: <Service title={"Construction Engineering"} />,
      },
      { path: "/services/seismic&wind-engineering", element: <Service /> },
      { path: "/services/tender&value-engineering", element: <Service /> },
      { path: "/services/design-management", element: <Service /> },
      { path: "/deneme", element: <Deneme /> },
    ],
  },
  {
    path: "*",
    element: <ErrorComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
--BAŞLIKLAR!!
--image galerideki fotolara caption yazıları
--navbar ın linklerinin düzeltilmesi
--homepage first impression kısmı
--mobile de nav menüsünü açınca ekranı kaplamalı, + site scrolla hareket ediyo
--galerideki fotolara hover yapınca 
--image ları process et size ları küçülsün megabyte wise
--692px wide ta galeri çok üste yapışık, oraya space koy
--iconlara ⓒ (copyright) koy.
--açık arka planlı image lara shadow.
-- work flow a hoverlandığında text içeren modal window, kapanabilen.
-- homepage deki featured projects section ının background ve text colorlarını variable lardan ata.
--featued projects deki yazı resme çok yakın + başlığın altındaki border çok bold. rengi de siyah olmasın
--navbar ı desktopta küçült
--icon un rengini nav deki linklerin rengi yap.

*/

/*

--her route ta ana div e margin top koy header üstüne gelmesin diye. ✔
--navbar ın renk teması ✔
--navbar ın height ı content in üstüne geliyo ✔ 
*/

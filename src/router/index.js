import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import GetStarted from "pages/GetStarted";
// import BookingLayout from "../layouts/BookingLayout";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/home"));
// const AboutUs = lazy(() => import("../pages/about-us"));
// const ContactUs = lazy(() => import("../pages/contact-us"));
// const WhatWeDo = lazy(() => import("../pages/what-we-do"));
// const PlansAndPricing = lazy(() => import("../pages/plans-and-pricing"));
// const FAQ = lazy(() => import("../pages/faq"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
// const Request = lazy(() => import("../pages/request"));
// const Personal = lazy(() => import("../pages/request/personal"));
// const ElderlyOne = lazy(() => import("../pages/request/elderly-one"));
// const ReviewRequest = lazy(() => import("../pages/request/review"));

const router = createBrowserRouter([
  {
    path: "/get-started",
    errorElement: <ErrorPage />,
    element: (
        <Outlet />
    ),
    children: [
      {
        path: "",
        element: <GetStarted />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export { router };

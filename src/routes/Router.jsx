import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UserManagement from "../page/UserManagement/UserManagement";
import CreatorManagement from "../page/CreatorManagement/CreatorManagement";

import Subscription from "../page/Subscription/Subscription";

import Profile from "../page/Settings/Profile";

import FAQ from "../page/Settings/FAQ";
import PrivacyPolicy from "../page/Settings/PrivacyPolicy";
import Categories from "../page/CategoriesManagement/Categories";
import Subcategory from "../page/CategoriesManagement/Subcategory";

import ForgetPass from "../Auth/ForgetPass";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";
import Notification from "../page/Notification/Notification";
import About from "../page/Settings/About";
import Login from "../Auth/Login";
import Plans from "../page/plans/Plans";
import Regeneration from "../page/regeneration/Regeneration";
import Payment from "../page/payment/Payment";
import AiMonitoring from "../page/aiMonitoring/AiMonitoring";
import SupportTicket from "../page/supportTicket/SupportTicket";
import Privecy from "../page/privecy/Privecy";
import TermsCondition from "../page/terms/TermsCondition";
import ExerciseLibrary from "../page/exerciseLibrary/ExerciseLibrary";
import ProfileSetting from "../page/profileSetting/ProfileSetting";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
     
        <DashboardLayout></DashboardLayout>
      
    ),
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/UserManagement",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "/dashboard/CreatorManagement",
        element: <CreatorManagement></CreatorManagement>,
      },
      {
        path: "/dashboard/CategoriesManagement/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/dashboard/CategoriesManagement/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/dashboard/CategoriesManagement/Subcategory",
        element: <Subcategory></Subcategory>,
      },
      {
        path: "/dashboard/regeneration",
        element: <Regeneration></Regeneration>,
      },
      {
        path: "/dashboard/Subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/dashboard/support-tickets",
        element: <SupportTicket></SupportTicket>
      },
       {
        path: "/dashboard/privecy-policy",
        element: <Privecy></Privecy>
      },
      {
        path: "/dashboard/terms",
        element: <TermsCondition></TermsCondition>
      },
      {
        path: "/dashboard/exercise-library",
        element: <ExerciseLibrary></ExerciseLibrary>
      },
      {
        path: "/dashboard/payments",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/ai-monitoring",
        element: <AiMonitoring></AiMonitoring>,
      },
      {
        path: "/dashboard/plans",
        element: <Plans></Plans>,
      },
      {
        path: "/dashboard/Settings/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/system-settings",
        element: <ProfileSetting></ProfileSetting>
      },
      {
        path: "/dashboard/Settings/notification",
        element: <Notification></Notification>,
      },
  
      {
        path: "/dashboard/Settings/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/dashboard/Settings/aboutUs",
        element: <About></About>,
      },
      {
        path: "/dashboard/Settings/PrivacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPass></ForgetPass>,
  },
  {
    path: "/verification",
    element: <Verify></Verify>,
  },
  {
    path: "/reset-password",
    element: <ResetPass></ResetPass>,
  },
]);

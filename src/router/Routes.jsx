import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ScriptToVideo from "../Pages/ScriptToVideo/ScriptToVideo";
import TextToVideo from "../Pages/TextToVideo/TextToVideo";
import ImageToVideo from "../Pages/ImageToVideo/ImageToVideo";
import AICaptionGenerator from "../Pages/AICaptionGenerator/AICaptionGenerator";
import AIVideoClipGenerator from "../Pages/AIVideoClipGenerator/AIVideoClipGenerator";
import AnalyticsSeoTools from "../Pages/AnalyticsSeoTools/AnalyticsSeoTools";
import AIImageGenerator from "../Pages/AIImageGenerator/AIImageGenerator";
import TextToVideoGenerator from "../Pages/TextToVideoGenerator/TextToVideoGenerator";
import AutoCaptionHashtags from "../Pages/AutoCaptionHashtags/AutoCaptionHashtags";
import RealisticVoiceovers from "../Pages/RealisticVoiceovers/RealisticVoiceovers";
import AutoVideoEditing from "../Pages/AutoVideoEditing/AutoVideoEditing";
import Signup from "../Pages/Auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Signup/>,
  },
  // {
  //   path: "/forgate-password",
  //   element: <ForgatePassword/>,
  // },
  // {
  //   path: "/verify-code",
  //   element: <VerifyCode/>,
  // },

  // {
  //   path: "/new-password",
  //   element: <NewPass/>,
  // },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/script-to-video",
            element: <ScriptToVideo />,
          },
          {
            path: "/text-to-video",
            element: <TextToVideo />,
          },
          {
            path: "/image-to-video",
            element: <ImageToVideo />,
          },
          {
            path: "/ai-caption-generator",
            element: <AICaptionGenerator />,
          },
          {
            path: "/ai-video-generator",
            element: <AIVideoClipGenerator />,
          },
          {
            path: "/analytics-seo-tools",
            element: <AnalyticsSeoTools />,
          },
          {
            path: "/ai-image-generator",
            element: <AIImageGenerator />,
          },
          {
            path: "/text-to-video-generator",
            element: <TextToVideoGenerator />,
          },
          {
            path: "/auto-caption-hashtags",
            element: <AutoCaptionHashtags />,
          },
          {
            path: "/realistic-voiceover",
            element: <RealisticVoiceovers/>,
          },
                {
            path: "/auto-video-editing",
            element: <AutoVideoEditing/>,
          },
        ],
      },
    ],
  },
]);

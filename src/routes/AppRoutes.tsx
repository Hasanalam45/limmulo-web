import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AppInfoPage from "../pages/AppInfoPage";
import TestFamilyPage from "../pages/TestFamilyPage";
import PreRegisterPage from "../pages/PreRegisterPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/over-ons" element={<AboutPage />} />
      <Route path="/over-de-app" element={<AppInfoPage />} />
      <Route path="/word-testgezin" element={<TestFamilyPage />} />
      <Route path="/preregistreer" element={<PreRegisterPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

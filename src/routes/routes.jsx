import { Navigate, Route, Routes } from "react-router-dom";
import DashboardAdmPage from "../pages/DashboardAdmPage/DashboardAdmPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/portfolio" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/login/dashboardAdm" element={<DashboardAdmPage />} />
    <Route path="*" element={<Navigate to="/portfolio" />} />
  </Routes>
);

export default RoutesMain;

import { MainLayout } from "@/app/layouts/MainLayout";
import { CompanyPage } from "@/pages/company";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Базовый редирект на единственную доступную страницу в макете */}
      <Route path="/" element={<Navigate to="/companies/12" replace />} />
      {/* Все страницы рендерим внутри MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/companies/12" element={<CompanyPage />} />
      </Route>
      {/* Фоллбек на базовый маршрут */}
      <Route path="*" element={<Navigate to="/companies/12" replace />} />
    </Routes>
  );
};

export default AppRouter;

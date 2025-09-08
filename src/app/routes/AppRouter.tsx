import { MainLayout } from "@/app/layouts/MainLayout";
import { CompanyPage } from "@/pages/company";
import { DEFAULT_ORGANIZATION_ID } from "@/shared/constants/app";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={`/companies/${DEFAULT_ORGANIZATION_ID}`} replace />
        }
      />
      <Route element={<MainLayout />}>
        <Route
          path={`/companies/${DEFAULT_ORGANIZATION_ID}`}
          element={<CompanyPage />}
        />
      </Route>
      <Route
        path="*"
        element={
          <Navigate to={`/companies/${DEFAULT_ORGANIZATION_ID}`} replace />
        }
      />
    </Routes>
  );
};

export default AppRouter;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRouters;

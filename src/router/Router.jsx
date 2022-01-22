import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaulLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

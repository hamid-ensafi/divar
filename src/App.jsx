import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./service/api";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout></AppLayout>}>
              <Route index element={<Home></Home>}></Route>
              <Route element="home" index></Route>
              <Route path="about" element={<p>about</p>}></Route>
              <Route path="contact" element={<p>contact</p>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

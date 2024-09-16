import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./service/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Article from "./pages/Article";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout></AppLayout>}>
              <Route index element={<Home></Home>}></Route>
              <Route element="home" index></Route>
              <Route path="article/:id" element={<Article></Article>}></Route>
              <Route path="contact" element={<p>contact</p>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

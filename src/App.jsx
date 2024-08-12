import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./pages/Home";
function App() {
  return (
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
  );
}

export default App;

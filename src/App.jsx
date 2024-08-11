import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "../store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route path="home" element={<p>home</p>}></Route>
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

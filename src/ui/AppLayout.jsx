import Header from "./Header";
import { Outlet } from "react-router-dom";
import ShowPage from "./ShowPage";
function AppLayout() {
  return (
    <>
      <Header></Header>
      <main className="relative">
        <Outlet></Outlet>
      </main>
      <ShowPage></ShowPage>
    </>
  );
}

export default AppLayout;

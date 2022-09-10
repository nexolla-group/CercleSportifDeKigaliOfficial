import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Home from "../home/Home";
import NewPlayground from "../newPlayground/NewPlayground";
import NewUser from "../newUser/NewUser";
import Playground from "../playground/Playground";
import ProductList from "../playgroundList/ProductList";
import User from "../user/User";
import UserList from "../userList/UserList";

const Page = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/playgrounds" element={<ProductList />} />
            <Route path="/playground/:playgroundId" element={<Playground />} />
            <Route path="/newPlayground" element={<NewPlayground />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default Page;

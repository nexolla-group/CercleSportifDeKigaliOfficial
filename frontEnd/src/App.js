import Footer from "./components/Footer/Footer";
import CardDetails from "./components/Cards/CardDetails";
import UserRegister from "./Pages/UserRegister";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import ContactUs from "./Pages/ContactUs";
import SportCenter from "./Pages/SportCenters";
import Header from "./components/Header/Header";
import Playgrounds from "./Pages/Playgrounds";
import BlackFooter from "./components/Footer/BlackFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeBooking from "./components/Cards/MakeBooking";
import Checkout from "./components/checkout/Checkout";
// admin
import "./App.css";
import HomeAdmin from "./Admin/pages/home/HomeAdmin";
import UserList from "./Admin/pages/userList/UserList";
import User from "./Admin/pages/user/User";
import NewUser from "./Admin/pages/newUser/NewUser";
import ProductList from "./Admin/pages/playgroundList/ProductList";
import Playground from "./Admin/pages/playground/Playground";
import NewPlayground from "./Admin/pages/newPlayground/NewPlayground";
import Test1 from "./Admin/components/test1/Test1";
import Login from "./Admin/pages/login/Login";
import Index from "./Admin/pages/index/Indexx";
import SortingTable from "./Admin/pages/index/Transactions/SortingTable";
import PrintReportBlank from "./Admin/pages/index/Transactions/PrintReportBlank";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sportcenter" element={<SportCenter />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/playgrounds" element={<Playgrounds />} />
          <Route path="/register" element={<UserRegister />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/makebooking" element={<MakeBooking />} />

          {/* admin */}
          <Route path="/admin/index" element={<HomeAdmin />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/user/:userId" element={<User />} />
          <Route path="/admin/newUser" element={<NewUser />} />
          <Route path="/admin/playground" element={<ProductList />} />

          <Route
            path="/admin/playground/:playgroundId"
            element={<Playground />}
          />
          <Route path="/admin/newPlayground" element={<NewPlayground />} />
          <Route path="/admin/" element={<Index />} />
          <Route
            path="/admin/PrintReportBlank"
            element={<PrintReportBlank />}
          />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

// next we'll talk about components of our projects

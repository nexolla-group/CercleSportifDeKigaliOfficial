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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeBooking from "./components/Cards/MakeBooking";

// admin
import "./App.css";
import HomeAdmin from "./Admin/pages/home/HomeAdmin";
import UserList from "./Admin/pages/userList/UserList";
import User from "./Admin/pages/user/User";
import NewUser from "./Admin/pages/newUser/NewUser";
import ProductList from "./Admin/pages/playgroundList/ProductList";
import Playground from "./Admin/pages/playground/Playground";
import NewPlayground from "./Admin/pages/newPlayground/NewPlayground";

import Login from "./Admin/pages/login/Login";
import Index from "./Admin/pages/index/Indexx";

import PrintReportBlank from "./Admin/pages/index/Transactions/PrintReportBlank";
import BookingReport from "./components/BookingReport/BookingReport";

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
          <Route path="/bookingReport" element={<BookingReport />} />

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

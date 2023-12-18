// Main pages
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/layouts/header";
import NavigationBar from "./components/layouts/navigationBar";
import Footer from "./components/layouts/footer";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./components/authen/requiredAuth";
import PersistLogin from "./components/authen/persistLogin";

// Category Pages
import Tea from "./pages/tea";
import MilkTea from "./pages/milktea";
import Coffee from "./pages/coffee";
import Cake from "./pages/cake";
import Reset from "./pages/reset";

// Staff Pages
import Product from "./pages/product";
import Setting from "./pages/setting";
import PaymentDetail from "./pages/payment";

// Management Pages
import OrderManagement from "./pages/management/orderManagement";
import ProductManagement from "./pages/management/productManagement";
import StaffManagement from "./pages/management/staffManagement";
import SliderManagement from "./pages/management/sliderManagement";
import StatisticReport from "./pages/management/statisticReport";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

// Account Pages
import LogInPopUp from "./components/authen/logInPopUp";
import SignUpPopUp from "./components/authen/signUpPopUp";
import NewPassword from "./components/authen/newPassword";
import ForgotPassword from "./components/authen/forgotPassword";

// Popups
import StaffPopUp from "./components/popUps/staffPopUp";
import EditProductPopUp from "./components/popUps/editProductPopUp";
import StaffEditPopUp from "./components/popUps/staffEditPopUp";

// Redux
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

function App() {
  const { isOpenUserPopUp } = useSelector((state) => state.popUpReducer);
  return (
    <div className="w-screen h-auto flex flex-col gap-0 overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <div className="w-full z-40">
          <div className="h-[60px]">
            <Header />
          </div>
          <div className="h-fit">
            {/* if login successful -> isAdmin = true */}
            <NavigationBar isAdmin={false} />
          </div>
        </div>
        <div className="absolute left-[calc((100vw_-_400px)_/_2)] top-6 left- grid-in-content z-50">
          {/* <AddToCartPopup /> */}
          {/* <LogInPopUp/> */}
          {/* <SignUpPopUp/> */}
          {/* <NewPassword/> */}
          {/* <ForgotPassword /> */}
          {/* <StaffPopUp /> */}
        </div>
        <div className="">
          <AnimatePresence>
            <Routes>
              {/* Public users */}
              <Route path="/" element={<Home />} />
              <Route path="/tea" element={<Tea />} />
              <Route path="/milktea" element={<MilkTea />} />
              <Route path="/coffee" element={<Coffee />} />
              <Route path="/cake" element={<Cake />} />
              <Route path="/about" element={<About />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/payment" element={<PaymentDetail />}></Route>
              <Route path="/reset" element={<Reset />}></Route>

              <Route element={<PersistLogin />}>
              <Route
                  element={
                    <RequiredAuth
                      allowedRoles={["customer", "staff", "manager"]}
                    />
                  }
                >
              <Route path="/setting" element={<Setting />} />
              </Route>
              <Route
                  element={<RequiredAuth allowedRoles={["staff", "manager"]} />}
                >
              <Route path="/order-management" element={<OrderManagement />} />
              </Route>

              <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
              <Route path="/staff-management" element={<StaffManagement />} />
              </Route>

              <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
              <Route
                path="/product-management"
                element={<ProductManagement />}
              />
              </Route>

              <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
              <Route path="/slider-management" element={<SliderManagement />} />
              </Route>

              <Route
                path="statistic-report"
                element={<StatisticReport />}
              ></Route>
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
        <div className="">
          <Footer />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;

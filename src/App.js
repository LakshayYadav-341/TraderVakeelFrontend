import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Dashboard from "./component/Dashboard/Dashboard";
import PricePage from "./component/Pricing Page/PricePage";
import TableContainer from "./component/Table/TableContainer";
import About from "./component/About/About";
import { DarkThemeProvider } from "./utils/DarkThemeContext";
import { ChartsLayout } from "./component/charts/ChartsLayout";
import PrivacyPolicy from "./component/common/PrivacyPolicy";
import TermsConditions from "./component/common/TermsConditions";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from "./component/Auth/ForgotPassword";
import ResetPassword from "./component/Auth/ResetPassword";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <>
      <DarkThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path='/chart' element={<Chart />} /> */}
            <Route path="/table" element={<TableContainer />} />
            <Route path="/pricing" element={<PricePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/charts-layout" element={<ChartsLayout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/password-reset/:token" element={<ResetPassword/>} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </DarkThemeProvider>
    </>
  );
}

export default App;

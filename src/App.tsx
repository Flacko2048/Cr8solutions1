import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";
import { BookingModal } from "./components/BookingModal";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] =
    useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage onBookingClick={openBookingModal} />
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy onBookingClick={openBookingModal} />
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <TermsOfService onBookingClick={openBookingModal} />
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <CookiePolicy onBookingClick={openBookingModal} />
          }
        />
      </Routes>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />
    </Router>
  );
}
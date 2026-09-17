import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";

import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-slate-200">
      <Navbar />
      <main className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-200">
            <RiseLoader
              color="#f43f5e"
              size={80}
              margin={4}
              speedMultiplier={0.85}
            />
          </div>
        )}

        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setActiveMenu }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear authentication data
    localStorage.removeItem("token"); // if you use JWT in localStorage
    sessionStorage.removeItem("token");

    // ✅ Optionally clear cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // ✅ Redirect to login page
    navigate("/login");
  };
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-8 text-center">
          <div className="p-4 bg-red-100 rounded-full w-fit mx-auto mb-4">
            <LogOut className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Logout</h2>
          <p className="text-gray-600 mb-8">
            Are you sure you want to logout from your account?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                handleLogout();
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Yes, Logout
            </button>
            <button
              onClick={() => setActiveMenu("profile")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;

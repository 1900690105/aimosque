import { Heart } from "lucide-react";
import React from "react";
import DonationList from "./DonationUI";

function DonationMainUI({ adminData, donations }) {
  const totalDonation = donations.reduce((sum, d) => sum + d.amount, 0);
  const now = new Date();
  const currentMonth = now.getMonth(); // 0 = Jan
  const currentYear = now.getFullYear();

  // ✅ Filter only this month's donations
  const monthlyDonations = donations.filter((d) => {
    const date = new Date(d.createdAt);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  // ✅ Calculate this month's total
  const totalThisMonth = monthlyDonations.reduce((sum, d) => sum + d.amount, 0);
  const totalDonors = new Set(donations.map((d) => d.donor_mobile)).size;
  return (
    <>
      <div className="space-y-6">
        {/* Donation Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="text-red-600" size={20} />
              </div>
              Donation Settings
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">
                  Enable Donation Tracking
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Track and manage donations received
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={adminData.enableDonationTracking}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Donation Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">
              Donation Statistics
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">
                  ₹{totalDonation}
                </p>
                <p className="text-sm text-gray-600">Total Donations</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">
                  ₹{totalThisMonth}
                </p>
                <p className="text-sm text-gray-600">This Month</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">
                  {totalDonors}
                </p>
                <p className="text-sm text-gray-600">Active Donors</p>
              </div>
            </div>
          </div>
        </div>
        <DonationList donations={donations} />
      </div>
    </>
  );
}

export default DonationMainUI;

import React from "react";

const DonationList = ({ donations }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Recent Donations
      </h2>

      <div className="space-y-4">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="p-5 rounded-2xl shadow-md border bg-white hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-700">
                {donation.donor_name}
              </h3>
              <span className="text-green-600 font-bold text-lg">
                ₹{donation.amount}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Mobile:{" "}
              <span className="font-medium">{donation.donor_mobile}</span>
            </p>

            <p className="text-sm text-gray-500">
              Admin ID: <span className="font-medium">{donation.admin_id}</span>
            </p>

            <div className="mt-2 text-xs text-gray-400">
              Payment ID: {donation.payment_id}
            </div>

            <div className="mt-1 text-xs text-gray-400">
              Time: {new Date(donation.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;

import { User } from "lucide-react";
import React from "react";

function ProfileSectionComponent({ adminData, setAdminData }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdminData((prev) => ({ ...prev, mosqueImage: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="space-y-8">
        {/* Admin Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="text-blue-600" size={20} />
              </div>
              Admin Profile
            </h2>
          </div>
          <div className="p-6">
            <EditableField
              label="Admin ID"
              field="adminId"
              value={adminData.adminId}
            />
            <EditableField
              label="Password"
              field="password"
              value={adminData.password}
              type="password"
            />
            <EditableField
              label="Full Name"
              field="fullName"
              value={adminData.fullName}
            />
          </div>
        </div>

        {/* Mosque Information Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Building className="text-green-600" size={20} />
              </div>
              Mosque Information
            </h2>
          </div>
          <div className="p-6">
            <EditableField
              label="Mosque Name"
              field="mosqueName"
              value={adminData.mosqueName}
            />

            {/* Image Upload Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mosque Image
                </label>
                <button
                  onClick={() => document.getElementById("imageUpload").click()}
                  className="inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <Camera size={14} className="mr-1" />
                  Upload
                </button>
              </div>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {adminData.mosqueImage ? (
                  <div className="space-y-2">
                    <img
                      src={adminData.mosqueImage}
                      alt="Mosque"
                      className="max-h-40 mx-auto rounded-lg shadow-sm object-cover"
                    />
                    <p className="text-sm text-gray-600">
                      Image uploaded successfully
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Camera size={32} className="mx-auto text-gray-400" />
                    <p className="text-gray-400">
                      Click upload to add mosque image
                    </p>
                  </div>
                )}
              </div>
            </div>

            <EditableField
              label="Mosque History"
              field="mosqueHistory"
              value={adminData.mosqueHistory}
              textarea={true}
            />
            <EditableField
              label="Mosque Address"
              field="mosqueAddress"
              value={adminData.mosqueAddress}
              textarea={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSectionComponent;

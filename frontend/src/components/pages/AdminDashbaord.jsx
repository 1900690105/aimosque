import React, { useEffect, useState } from "react";
import {
  User,
  CreditCard,
  Clock,
  Heart,
  LogOut,
  Edit3,
  Save,
  X,
  Menu,
  Camera,
  Building,
} from "lucide-react";
import DonationList from "./components/DonationUI";
import Logout from "./components/Logout";
import DonationMainUI from "./components/DonationMainUI";

const MosqueAdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [editMode, setEditMode] = useState({});
  const [adminData, setAdminData] = useState({
    adminId: "",
    password: "",
    fullName: "",
    mosqueName: "",
    mosqueImage: null,
    mosqueHistory: "",
    mosqueAddress: "",
    bankAccountNumber: "",
    bankIFSC: "",
    bankAccountHolder: "",
    bankName: "",
    enableDonationTracking: false,
    prayerTimings: {
      fajr: "",
      dhuhr: "",
      asr: "",
      maghrib: "",
      isha: "",
      jummah: "",
    },
  });
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState("");
  const adminId = sessionStorage.getItem("adminId");

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/admin/${adminId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch admin");
        }

        const data = await res.json();
        setAdmin(data);

        setAdminData((prev) => ({
          ...prev,
          adminId: data.admin?.admin_id || "",
          fullName: data.admin?.full_name || "",
          mosqueAddress: data.mosqueDetail?.mosque_address || "",
          mosqueImage: data.mosqueDetail?.mosque_image || "",
          mosqueHistory: data.mosqueDetail?.mosque_history || "",
          mosqueName: data.mosqueDetail?.mosque_name || "",
          bankAccountHolder: data.financialDetail?.bank_account_holder || "",
          bankAccountNumber: data.financialDetail?.bank_account_number || "",
          bankIFSC: data.financialDetail?.bank_ifsc || "",
          bankName: data.financialDetail?.bank_name || "",
          prayerTimings: {
            ...prev.prayerTimings,
            ...data.prayerTiming,
          },
        }));
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchDonations = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/donate/admin/${adminId}`
        );
        const data = await res.json();

        if (data.success) {
          setDonations(data.data);
          // console.log(data.data);
        } else {
          setError("Failed to fetch donations");
        }
      } catch (err) {
        setError("Server error while fetching donations");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (adminId) {
      fetchAdmin();
      fetchDonations();
    }
  }, [adminId]);

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "bank", label: "Bank Details", icon: CreditCard },
    { id: "prayer", label: "Prayer Timings", icon: Clock },
    { id: "donation", label: "Donation", icon: Heart },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  const toggleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setAdminData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setAdminData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const saveField = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: false }));
    console.log(
      "Saved field:",
      field,
      "Value:",
      adminData[field] || adminData[field.split(".")[0]]?.[field.split(".")[1]]
    );
  };

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

  const EditableField = ({
    label,
    field,
    value,
    type = "text",
    textarea = false,
  }) => {
    const isEditing = editMode[field];

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <button
            onClick={() => (isEditing ? saveField(field) : toggleEdit(field))}
            className="inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
          >
            {isEditing ? (
              <>
                <Save size={14} className="mr-1" />
                Save
              </>
            ) : (
              <>
                <Edit3 size={14} className="mr-1" />
                Edit
              </>
            )}
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            {textarea ? (
              <textarea
                value={value}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            ) : (
              <input
                type={type}
                value={value}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            )}
            <button
              onClick={() =>
                setEditMode((prev) => ({ ...prev, [field]: false }))
              }
              className="inline-flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={14} className="mr-1" />
              Cancel
            </button>
          </div>
        ) : (
          <div className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg min-h-[44px] flex items-center">
            {value ? (
              <span className="text-gray-900">{value}</span>
            ) : (
              <span className="text-gray-400 italic">
                Click edit to add {label.toLowerCase()}
              </span>
            )}
          </div>
        )}
      </div>
    );
  };

  const ProfileSection = () => (
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
  );

  const BankSection = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CreditCard className="text-blue-600" size={20} />
          </div>
          Bank Details
        </h2>
      </div>
      <div className="p-6">
        <EditableField
          label="Bank Account Number"
          field="bankAccountNumber"
          value={adminData.bankAccountNumber}
        />
        <EditableField
          label="Bank IFSC Code"
          field="bankIFSC"
          value={adminData.bankIFSC}
        />
        <EditableField
          label="Account Holder Name"
          field="bankAccountHolder"
          value={adminData.bankAccountHolder}
        />
        <EditableField
          label="Bank Name"
          field="bankName"
          value={adminData.bankName}
        />
      </div>
    </div>
  );

  const PrayerSection = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Clock className="text-purple-600" size={20} />
          </div>
          Prayer Timings
        </h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EditableField
            label="Fajr"
            field="prayerTimings.fajr"
            value={adminData.prayerTimings.fajr}
            type="time"
          />
          <EditableField
            label="Dhuhr"
            field="prayerTimings.dhuhr"
            value={adminData.prayerTimings.dhuhr}
            type="time"
          />
          <EditableField
            label="Asr"
            field="prayerTimings.asr"
            value={adminData.prayerTimings.asr}
            type="time"
          />
          <EditableField
            label="Maghrib"
            field="prayerTimings.maghrib"
            value={adminData.prayerTimings.maghrib}
            type="time"
          />
          <EditableField
            label="Isha"
            field="prayerTimings.isha"
            value={adminData.prayerTimings.isha}
            type="time"
          />
          <EditableField
            label="Jummah"
            field="prayerTimings.jummah"
            value={adminData.prayerTimings.jummah}
            type="time"
          />
        </div>
      </div>
    </div>
  );

  const DonationSection = () => (
    <DonationMainUI
      adminData={adminData}
      donations={donations}
      DonationList={DonationList}
    />
  );

  const LogoutSection = () => <Logout setActiveMenu={setActiveMenu} />;

  const renderContent = () => {
    switch (activeMenu) {
      case "profile":
        return <ProfileSection />;
      case "bank":
        return <BankSection />;
      case "prayer":
        return <PrayerSection />;
      case "donation":
        return <DonationSection />;
      case "logout":
        return <LogoutSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Mosque Admin
            </h1>
            <p className="text-sm text-gray-600">
              {adminData.mosqueName || "Dashboard"}
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">Mosque Admin</h1>
            <p className="text-sm text-gray-600 mt-1">
              {adminData.mosqueName || "Mosque Dashboard"}
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full text-left px-6 py-3 flex items-center gap-4 transition-all duration-200
                    ${
                      activeMenu === item.id
                        ? "bg-blue-50 text-blue-700 border-r-3 border-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosqueAdminDashboard;

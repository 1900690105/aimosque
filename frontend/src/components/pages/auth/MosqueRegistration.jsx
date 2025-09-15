import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";
import {
  Building2,
  FileImage,
  History,
  User,
  Shield,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
} from "../../icons/Icons";
import { useState } from "react";

function MosqueRegistration({ formData, updateFormData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [adminIdStatus, setAdminIdStatus] = useState(null); // null, 'checking', 'available', 'taken'
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData({ mosqueImage: e.target.files[0] });
    }
  };

  const validatePassword = (password) => {
    const validation = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordValidation(validation);
    return Object.values(validation).every(Boolean);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    updateFormData({ password });
    validatePassword(password);
  };

  const checkAdminIdAvailability = async () => {
    if (!formData.adminId || formData.adminId.trim().length < 3) {
      alert("Admin ID must be at least 3 characters long");
      return;
    }

    // Regex: only letters, numbers, underscore allowed
    const validIdPattern = /^[a-zA-Z0-9_]+$/;
    if (!validIdPattern.test(formData.adminId.trim())) {
      alert(
        "Admin ID can only contain letters, numbers, and underscores (no special symbols)."
      );
      return;
    }

    setAdminIdStatus("checking");

    try {
      // Backend API endpoint
      const response = await fetch(
        "http://localhost:5000/api/admin/check-admin-id",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ adminId: formData.adminId.trim() }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAdminIdStatus(data.exists ? "taken" : "available");
      } else {
        setAdminIdStatus(null);
        alert("Error checking Admin ID availability");
      }
    } catch (error) {
      console.error("Error checking admin ID:", error);
      setAdminIdStatus(null);
      alert("Error checking Admin ID availability");
    }
  };

  const getAdminIdStatusIcon = () => {
    switch (adminIdStatus) {
      case "checking":
        return (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
        );
      case "available":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "taken":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getAdminIdStatusMessage = () => {
    switch (adminIdStatus) {
      case "checking":
        return (
          <span className="text-sm text-blue-600">
            Checking availability...
          </span>
        );
      case "available":
        return (
          <span className="text-sm text-green-600">Admin ID is available!</span>
        );
      case "taken":
        return (
          <span className="text-sm text-red-600">
            Admin ID already exists. Please choose another.
          </span>
        );
      default:
        return null;
    }
  };

  // const isPasswordValid = Object.values(passwordValidation).every(Boolean);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary">
          Mosque Registration
        </h3>
        <p className="text-sm text-primary mt-1">
          Enter information about your mosque
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label
            htmlFor="fullName"
            className="text-primary font-medium flex items-center gap-2"
          >
            <User className="h-4 w-4" /> Your Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              const value = e.target.value;
              const fullNamePattern = /^[a-zA-Z\s]*$/; // only letters & spaces
              if (fullNamePattern.test(value)) {
                updateFormData({ fullName: value });
              }
            }}
            placeholder="Enter your full name"
            className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="mosqueName"
            className="text-primary font-medium flex items-center gap-2"
          >
            <Building2 className="h-4 w-4" /> Mosque Name
          </Label>
          <Input
            id="mosqueName"
            type="text"
            value={formData.mosqueName}
            onChange={(e) => {
              const value = e.target.value;
              const mosqueNamePattern = /^[a-zA-Z0-9\s&-]*$/; // letters, numbers, spaces, &, -
              if (mosqueNamePattern.test(value)) {
                updateFormData({ mosqueName: value });
              }
            }}
            placeholder="Enter mosque name"
            className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="mosqueAddress"
            className="text-primary font-medium flex items-center gap-2"
          >
            <Building2 className="h-4 w-4" /> Mosque Address
          </Label>
          <Input
            id="mosqueAddress"
            type="text"
            value={formData.mosqueAddress}
            onChange={(e) => updateFormData({ mosqueAddress: e.target.value })}
            placeholder="Enter mosque Address"
            className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>

        {/* Admin ID Field */}
        <div className="space-y-2">
          <Label
            htmlFor="adminId"
            className="text-primary font-medium flex items-center gap-2"
          >
            <Shield className="h-4 w-4" /> Admin ID
          </Label>
          <div className="flex gap-2">
            <Input
              id="adminId"
              type="text"
              value={formData.adminId || ""}
              onChange={(e) => {
                updateFormData({ adminId: e.target.value });
                setAdminIdStatus(null); // Reset status when user types
              }}
              placeholder="Unique id like Eg.mosquename8512"
              className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              required
            />
            <button
              type="button"
              onClick={checkAdminIdAvailability}
              disabled={adminIdStatus === "checking" || !formData.adminId}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
            >
              {getAdminIdStatusIcon()}
              Check
            </button>
          </div>
          <div className="flex items-center gap-2 min-h-[20px]">
            {getAdminIdStatusMessage()}
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2 md:col-span-2">
          <Label
            htmlFor="password"
            className="text-primary font-medium flex items-center gap-2"
          >
            <Shield className="h-4 w-4" /> Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password || ""}
              onChange={handlePasswordChange}
              placeholder="Enter secure password"
              className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>

          {/* Password Validation */}
          <div className="mt-2 space-y-1">
            <div
              className={`text-xs flex items-center gap-2 ${
                passwordValidation.minLength ? "text-green-600" : "text-red-600"
              }`}
            >
              {passwordValidation.minLength ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              At least 8 characters
            </div>
            <div
              className={`text-xs flex items-center gap-2 ${
                passwordValidation.hasUppercase
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {passwordValidation.hasUppercase ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              At least one uppercase letter
            </div>
            <div
              className={`text-xs flex items-center gap-2 ${
                passwordValidation.hasLowercase
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {passwordValidation.hasLowercase ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              At least one lowercase letter
            </div>
            <div
              className={`text-xs flex items-center gap-2 ${
                passwordValidation.hasNumber ? "text-green-600" : "text-red-600"
              }`}
            >
              {passwordValidation.hasNumber ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              At least one number
            </div>
            <div
              className={`text-xs flex items-center gap-2 ${
                passwordValidation.hasSpecialChar
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {passwordValidation.hasSpecialChar ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              At least one special character (!@#$%^&*(),.?":{}|&lt;&gt;)
            </div>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label
            htmlFor="mosqueImage"
            className="text-primary font-medium flex items-center gap-2"
          >
            <FileImage className="h-4 w-4" /> Mosque Image (Optional)
          </Label>
          <div className="border-2 border-dashed border-primary rounded-lg p-4 text-center hover:bg-emerald-50 transition-colors">
            <Input
              id="mosqueImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="mosqueImage" className="cursor-pointer block">
              <FileImage className="h-8 w-8 mx-auto text-primary mb-2" />
              <span className="text-sm text-primary font-medium">
                Click to upload image
              </span>
              <p className="text-xs text-primary mt-1">
                {formData.mosqueImage
                  ? formData.mosqueImage.name
                  : "JPG, PNG or GIF (max. 5MB)"}
              </p>
            </label>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label
            htmlFor="mosqueHistory"
            className="text-primary font-medium flex items-center gap-2"
          >
            <History className="h-4 w-4" /> Mosque History (Optional)
          </Label>
          <Textarea
            id="mosqueHistory"
            value={formData.mosqueHistory}
            onChange={(e) => updateFormData({ mosqueHistory: e.target.value })}
            placeholder="Enter brief history or description of the mosque"
            className="min-h-[120px] border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
          />
        </div>
      </div>

      {/* Decorative element */}
      <div className="flex justify-center mt-8 opacity-10">
        <svg
          width="120"
          height="30"
          viewBox="0 0 120 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60 0L70 10H50L60 0Z" fill="#10B981" />
          <path d="M40 10L50 20H30L40 10Z" fill="#10B981" />
          <path d="M80 10L90 20H70L80 10Z" fill="#10B981" />
          <path d="M60 20L70 30H50L60 20Z" fill="#10B981" />
        </svg>
      </div>
    </div>
  );
}

export default MosqueRegistration;

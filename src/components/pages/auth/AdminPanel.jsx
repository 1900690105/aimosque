import { useState } from "react";
import { motion } from "framer-motion";
import AdminLogin from "./AdminLogin";
import MosqueRegistration from "./MosqueRegistration";
import MosqueFinancial from "./MosqueFinancial";
import PrayerTimings from "./PrayerTimings";
import ReviewSubmit from "./ReviewSubmit";
import Button from "../../ui/Button";
import Card from "../../ui/Card";

// Import icons
import { ChevronLeft, ChevronRight, Save } from "../../icons/Icons";

const steps = [
  { id: "login", title: "Admin Login", icon: "🔐" },
  { id: "registration", title: "Mosque Registration", icon: "🕌" },
  { id: "financial", title: "Financial Details", icon: "💳" },
  { id: "prayer", title: "Prayer Timings", icon: "🕰️" },
  { id: "review", title: "Review & Submit", icon: "✅" },
];

function AdminPanel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    adminId: "",
    password: "",
    fullName: "",
    mosqueName: "",
    mosqueImage: null,
    mosqueHistory: "",
    bankAccount: "",
    upiId: "",
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

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    console.log("Submitting form data:", formData);
    alert("Mosque profile saved successfully!");
    // Reset form or redirect as needed
  };

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case "login":
        return (
          <AdminLogin formData={formData} updateFormData={updateFormData} />
        );
      case "registration":
        return (
          <MosqueRegistration
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case "financial":
        return (
          <MosqueFinancial
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case "prayer":
        return (
          <PrayerTimings formData={formData} updateFormData={updateFormData} />
        );
      case "review":
        return <ReviewSubmit formData={formData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-md px-4 mt-4 mb-4">
      <Card className="w-md border-0 shadow-xl overflow-hidden  rounded-2xl">
        {/* Progress bar */}
        <div className="w-full text-primary h-1">
          <div
            className=" bg-primary h-1 transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Step Indicator */}
        <div className="flex border-b overflow-x-auto p-1">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-1 py-4 px-2 text-center relative ${
                index === currentStep
                  ? "text-emerald-700"
                  : index < currentStep
                  ? "text-emerald-300"
                  : "text-secondary"
              }`}
            >
              <div
                className={`
                flex flex-col items-center justify-center
                ${
                  index === currentStep
                    ? "scale-110 transition-all duration-300"
                    : ""
                }
              `}
              >
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-2
                  ${
                    index === currentStep
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md"
                      : index < currentStep
                      ? "bg-emerald-100 text-emerald-600 border border-emerald-200"
                      : "bg-gray-100 text-gray-400 border border-gray-200"
                  }
                `}
                >
                  <span>{step.icon}</span>
                </div>
                <span className="text-xs font-medium hidden md:block">
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content with animation */}
        <div className="p-0">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            {renderStepContent()}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between p-8 pt-0">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2 border-emerald-200 text-primary hover:text-red-50 hover:text-primary-800"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md"
              >
                Save & Activate <Save className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AdminPanel;

import React, { useState, useEffect } from "react";
import WhyDonate from "../WhyDonate";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [mosques, setMosques] = useState([]);
  const [selectedMosque, setSelectedMosque] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const amounts = [100, 2500, 5000, 10000];
  const [formdata, setFormData] = useState({
    name: "",
    mobile: "",
  });

  useEffect(() => {
    loadRazorpayScript();
    fetchMosques();

    return () => {
      cleanupRazorpayScript();
    };
  }, []);

  const loadRazorpayScript = () => {
    try {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onerror = () => {
        setError(
          "Failed to load payment gateway. Please refresh and try again."
        );
      };
      document.body.appendChild(script);
    } catch (err) {
      setError("Failed to initialize payment system.", err);
    }
  };

  const cleanupRazorpayScript = () => {
    try {
      const scriptElement = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    } catch (err) {
      console.error("Error cleaning up script:", err);
    }
  };

  const fetchMosques = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/mosque`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setMosques(data);
      } else {
        throw new Error("Invalid mosque data received");
      }
    } catch (err) {
      console.error("Error fetching mosques:", err);
      setError("Failed to load mosques. Please refresh the page.");
    }
  };

  const validateInputs = () => {
    const amount = parseInt(selectedAmount);

    if (!amount || amount < 1) {
      setError("Please enter a valid donation amount (minimum ₹1)");
      return false;
    }

    if (amount > 1000000) {
      setError("Donation amount cannot exceed ₹10,00,000");
      return false;
    }

    if (!selectedMosque) {
      setError("Please select a mosque");
      return false;
    }

    return true;
  };

  const createOrder = async (amount, mosqueId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/create-order`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          mosqueId: mosqueId,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    return response.json();
  };

  const savePayment = async (paymentData) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/save-payment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Failed to save payment: ${response.status}`
      );
    }

    return response.json();
  };

  const handleDonate = async () => {
    setError("");

    if (!validateInputs()) {
      return;
    }

    const amount = parseInt(selectedAmount);
    const mosque = mosques.find((m) => m.id === parseInt(selectedMosque));

    if (!mosque) {
      setError("Selected mosque not found. Please try again.");
      return;
    }

    setLoading(true);

    try {
      // Create order
      const order = await createOrder(amount, mosque.admin_id);

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Mosque Donation",
        description: `Donation to ${mosque.mosque_name}`,
        order_id: order.id,
        handler: async function (response) {
          try {
            setLoading(true);

            const paymentData = {
              payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              admin_id: mosque.admin_id,
              mosque_name: mosque.mosque_name,
              amount: amount,
              donor_name: formdata.name,
              donor_mobile: formdata.mobile,
            };

            await savePayment(paymentData);

            // Set donation details for thank you popup
            setDonationDetails({
              amount: amount,
              mosque: mosque.mosque_name,
              paymentId: response.razorpay_payment_id,
              date: new Date().toLocaleDateString(),
            });

            // Reset form
            setSelectedAmount("");
            setSelectedMosque("");
            setFormData({ name: "", mobile: "" });

            // Show thank you popup
            setShowThankYou(true);
          } catch (error) {
            console.error("Error saving payment:", error);
            setError(
              "Payment successful but failed to save details. Please contact support with payment ID: " +
                response.razorpay_payment_id
            );
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
        prefill: {
          name: formdata.name,
          contact: formdata.mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Check if Razorpay is loaded
      if (typeof window.Razorpay === "undefined") {
        throw new Error(
          "Payment gateway not loaded. Please refresh the page and try again."
        );
      }

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        setError(`Payment failed: ${response.error.description}`);
        setLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Donation error:", error);
      setError(error.message || "Something went wrong! Please try again.");
      setLoading(false);
    }
  };

  const closeThankYouPopup = () => {
    setShowThankYou(false);
    setDonationDetails(null);
  };

  const clearError = () => {
    setError("");
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Donate Sadaqa</h1>
        <p className="text-muted-foreground mb-8">
          Support your local mosques with your contribution
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div className="text-red-600 mr-2">⚠️</div>
                <div className="text-red-800 text-sm">{error}</div>
              </div>
              <button
                onClick={clearError}
                className="text-red-600 hover:text-red-800 ml-4"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Make a Donation
                </div>
                <div className="text-sm text-muted-foreground">
                  Choose a mosque and donation amount
                </div>
              </div>
              <div className="p-6 pt-0 space-y-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="mosque"
                  >
                    Select Mosque
                  </label>
                  <select
                    id="mosque"
                    value={selectedMosque}
                    onChange={(e) => setSelectedMosque(e.target.value)}
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    disabled={loading}
                  >
                    <option value="">Select a mosque</option>
                    {mosques.map((mosque) => (
                      <option key={mosque.id} value={mosque.id}>
                        {mosque.mosque_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    placeholder="Enter your name"
                    value={formdata.name}
                    onChange={(e) =>
                      setFormData({ ...formdata, name: e.target.value })
                    }
                    disabled={loading}
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="mobile"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    placeholder="Enter 10-digit mobile number"
                    value={formdata.mobile}
                    onChange={(e) =>
                      setFormData({ ...formdata, mobile: e.target.value })
                    }
                    disabled={loading}
                    type="tel"
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount.toString())}
                        disabled={loading}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          selectedAmount === amount.toString()
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-sm">
                    Selected Amount:{" "}
                    <strong>
                      {selectedAmount ? `₹${selectedAmount}` : "None"}
                    </strong>
                  </p>
                </div>

                <div className="pt-2">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="custom-amount"
                  >
                    Custom Amount (INR ₹)
                  </label>
                  <input
                    id="custom-amount"
                    placeholder="Enter amount"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    min="1"
                    max="1000000"
                    type="number"
                    disabled={loading}
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={handleDonate}
                  disabled={loading || !selectedAmount || !selectedMosque}
                  className="w-full bg-primary text-white rounded-md h-10 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Donate Now"}
                </button>
              </div>
            </div>
          </div>

          <WhyDonate />
        </div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && donationDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-6 text-center">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Donation!
              </h2>
              <p className="text-gray-600 mb-6">
                Your generous contribution has been successfully processed.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Donation Details:
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold">
                      ₹{donationDetails.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mosque:</span>
                    <span className="font-semibold">
                      {donationDetails.mosque}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">
                      {donationDetails.date}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-semibold text-xs">
                      {donationDetails.paymentId}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                May Allah accept your donation and reward you abundantly. Your
                support helps maintain and improve mosque services for the
                community.
              </p>

              <button
                onClick={closeThankYouPopup}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

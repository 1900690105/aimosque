import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Switch from "../../ui/Switch";
import { BanknoteIcon, CreditCard, Landmark, QrCode } from "../../icons/Icons";

function MosqueFinancial({ formData, updateFormData }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <BanknoteIcon className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary-800">
          Financial Details
        </h3>
        <p className="text-sm text-primary-600 mt-1">
          Set up donation channels for your mosque
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Bank Details Section */}
        <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="space-y-4">
            <div className="p-2 rounded-lg shadow-sm flex gap-2 items-center mb-4">
              <Landmark className="h-6 w-6 font-bold text-emerald-500" />
              <p className="font-bold">Bank Details</p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bankName"
                className="text-primary-700 font-medium"
              >
                Bank Name
              </Label>
              <Input
                id="bankName"
                type="text"
                value={formData.bankName || ""}
                onChange={(e) => updateFormData({ bankName: e.target.value })}
                placeholder="Enter mosque bank name"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bankAccountNumber"
                className="text-primary-700 font-medium"
              >
                Account Number
              </Label>
              <Input
                id="bankAccountNumber"
                type="text"
                value={formData.bankAccountNumber || ""}
                onChange={(e) =>
                  updateFormData({ bankAccountNumber: e.target.value })
                }
                placeholder="Enter mosque bank account number"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bankIFSC"
                className="text-primary-700 font-medium"
              >
                IFSC Code
              </Label>
              <Input
                id="bankIFSC"
                type="text"
                value={formData.bankIFSC || ""}
                onChange={(e) => updateFormData({ bankIFSC: e.target.value })}
                placeholder="Enter IFSC code"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bankAccountHolder"
                className="text-primary-700 font-medium"
              >
                Account Holder Name
              </Label>
              <Input
                id="bankAccountHolder"
                type="text"
                value={formData.bankAccountHolder || ""}
                onChange={(e) =>
                  updateFormData({ bankAccountHolder: e.target.value })
                }
                placeholder="Enter account holder name"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>

        {/* UPI Section */}
        <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg shadow-sm">
              <QrCode className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="upiId" className="text-primary-700 font-medium">
                UPI ID for Donations
              </Label>
              <Input
                id="upiId"
                type="text"
                value={formData.upiId || ""}
                onChange={(e) => updateFormData({ upiId: e.target.value })}
                placeholder="Enter UPI ID"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
              <p className="text-xs text-primary-600">
                For quick mobile payments
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Donation Tracking Section */}
        {/* <div className="md:col-span-2 p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="donationTracking"
                  className="text-primary-700 font-medium"
                >
                  Donation Tracking
                </Label>
                <Switch
                  id="donationTracking"
                  checked={formData.enableDonationTracking || false}
                  onChange={(e) =>
                    updateFormData({ enableDonationTracking: e.target.checked })
                  }
                />
              </div>
              <p className="text-sm text-primary-600">
                Enable donation tracking to keep records of all donations and
                generate reports.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MosqueFinancial;

// import Input from "../../ui/Input";
// import Label from "../../ui/Label";
// import Switch from "../../ui/Switch";
// import { BanknoteIcon, CreditCard, Landmark, QrCode } from "../../icons/Icons";

// function MosqueFinancial({ formData, updateFormData }) {
//   return (
//     <div className="space-y-8 max-w-4xl mx-auto">
//       <div className="text-center mb-8">
//         <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
//           <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
//             <BanknoteIcon className="h-6 w-6 text-white" />
//           </div>
//         </div>
//         <h3 className="text-xl font-semibold text-primary-800">
//           Financial Details
//         </h3>
//         <p className="text-sm text-primary-600 mt-1">
//           Set up donation channels for your mosque
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
//         <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
//           <div className="">
//             <div className="p-2 rounded-lg shadow-sm flex gap-1">
//               <Landmark className="h-6 w-6 font-bold text-emerald-500" />
//               <p className="font-bold">Back Details</p>
//             </div>
//             <div className="space-y-2 flex-1">
//               <Label
//                 htmlFor="bankName"
//                 className="text-primary-700 font-medium"
//               >
//                 Bank Name
//               </Label>
//               <Input
//                 id="bankAccount"
//                 type="text"
//                 value={formData.bankName}
//                 onChange={(e) => updateFormData({ bankName: e.target.value })}
//                 placeholder="Enter mosque bank name"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//               {/* <p className="text-xs text-primary-600">
//                 For direct bank transfers and donations
//               </p> */}
//             </div>
//             <div className="space-y-2 flex-1">
//               <Label
//                 htmlFor="bankAccount"
//                 className="text-primary-700 font-medium"
//               >
//                 Account Number
//               </Label>
//               <Input
//                 id="bankAccountNumber"
//                 type="text"
//                 value={formData.bankAccountNumber}
//                 onChange={(e) =>
//                   updateFormData({ bankAccountNumber: e.target.value })
//                 }
//                 placeholder="Enter mosque bank account number"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//               {/* <p className="text-xs text-primary-600">
//                 For direct bank transfers and donations
//               </p> */}
//             </div>
//             <div className="space-y-2 flex-1">
//               <Label
//                 htmlFor="bankIFSC"
//                 className="text-primary-700 font-medium"
//               >
//                 IFSC Code
//               </Label>
//               <Input
//                 id="bankIFSC"
//                 type="text"
//                 value={formData.bankIFSC}
//                 onChange={(e) => updateFormData({ bankIFSC: e.target.value })}
//                 placeholder="Enter mosque bank account number"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//               {/* <p className="text-xs text-primary-600">
//                 For direct bank transfers and donations
//               </p> */}
//             </div>
//             <div className="space-y-2 flex-1">
//               <Label
//                 htmlFor="bankAccount"
//                 className="text-primary-700 font-medium"
//               >
//                 Account Holder Name
//               </Label>
//               <Input
//                 id="bankAccount"
//                 type="text"
//                 value={formData.bankAccountHolder}
//                 onChange={(e) =>
//                   updateFormData({ bankAccountHolder: e.target.value })
//                 }
//                 placeholder="Enter mosque bank account number"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//               {/* <p className="text-xs text-primary-600">
//                 For direct bank transfers and donations
//               </p> */}
//             </div>
//           </div>
//         </div>
//         {/* <p className="flex justify-center">OR</p> */}
//         <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
//           <div className="flex items-start gap-4">
//             <div className="p-2 rounded-lg shadow-sm">
//               <QrCode className="h-6 w-6 text-emerald-500" />
//             </div>
//             <div className="space-y-2 flex-1">
//               <Label htmlFor="upiId" className="text-primary-700 font-medium">
//                 UPI ID for Donations
//               </Label>
//               <Input
//                 id="upiId"
//                 type="text"
//                 value={formData.upiId}
//                 onChange={(e) => updateFormData({ upiId: e.target.value })}
//                 placeholder="Enter UPI ID"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//               <p className="text-xs text-primary-600">
//                 For quick mobile payments
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* <div className="md:col-span-2 p-6 rounded-xl border border-emerald-100 shadow-sm">
//           <div className="flex items-start gap-4">
//             <div className="p-2 rounded-lg">
//               <CreditCard className="h-6 w-6 text-emerald-500" />
//             </div>
//             <div className="space-y-2 flex-1">
//               <div className="flex justify-between items-center">
//                 <Label
//                   htmlFor="donationTracking"
//                   className="text-primary-700 font-medium"
//                 >
//                   Donation Tracking
//                 </Label>
//                 <Switch
//                   id="donationTracking"
//                   checked={formData.enableDonationTracking}
//                   onChange={(e) =>
//                     updateFormData({ enableDonationTracking: e.target.checked })
//                   }
//                 />
//               </div>
//               <p className="text-sm text-primary-600">
//                 Enable donation tracking to keep records of all donations and
//                 generate reports.
//               </p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default MosqueFinancial;

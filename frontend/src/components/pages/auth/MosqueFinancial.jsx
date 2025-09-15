import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { BanknoteIcon, Landmark } from "../../icons/Icons";

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

            {/* Bank Name */}
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
                onChange={(e) => {
                  const value = e.target.value;
                  const pattern = /^[a-zA-Z\s&]*$/; // letters, spaces, &
                  if (pattern.test(value)) {
                    updateFormData({ bankName: value });
                  }
                }}
                placeholder="Enter mosque bank name"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>

            {/* Account Number */}
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
                onChange={(e) => {
                  const value = e.target.value;
                  const pattern = /^[0-9]{0,18}$/; // only digits, up to 18
                  if (pattern.test(value)) {
                    updateFormData({ bankAccountNumber: value });
                  }
                }}
                placeholder="Enter mosque bank account number"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>

            {/* IFSC Code */}
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
                onChange={(e) => {
                  const value = e.target.value.toUpperCase();
                  // const pattern = /^[A-Z]{0,4}0?[0-9]{0,6}$/;
                  // matches partial typing of IFSC (final format: 4 letters + 0 + 6 digits)
                  if (/^[A-Z0-9]*$/.test(value)) {
                    updateFormData({ bankIFSC: value });
                  }
                }}
                placeholder="Enter IFSC code (e.g. SBIN0001234)"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 uppercase"
              />
            </div>

            {/* Account Holder Name */}
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
                onChange={(e) => {
                  const value = e.target.value;
                  const pattern = /^[a-zA-Z\s]*$/; // only letters and spaces
                  if (pattern.test(value)) {
                    updateFormData({ bankAccountHolder: value });
                  }
                }}
                placeholder="Enter account holder name"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MosqueFinancial;

// import Input from "../../ui/Input";
// import Label from "../../ui/Label";
// import { BanknoteIcon, Landmark, QrCode } from "../../icons/Icons";

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

//       <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//         {/* Bank Details Section */}
//         <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
//           <div className="space-y-4">
//             <div className="p-2 rounded-lg shadow-sm flex gap-2 items-center mb-4">
//               <Landmark className="h-6 w-6 font-bold text-emerald-500" />
//               <p className="font-bold">Bank Details</p>
//             </div>

//             <div className="space-y-2">
//               <Label
//                 htmlFor="bankName"
//                 className="text-primary-700 font-medium"
//               >
//                 Bank Name
//               </Label>
//               <Input
//                 id="bankName"
//                 type="text"
//                 value={formData.bankName || ""}
//                 onChange={(e) => updateFormData({ bankName: e.target.value })}
//                 placeholder="Enter mosque bank name"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label
//                 htmlFor="bankAccountNumber"
//                 className="text-primary-700 font-medium"
//               >
//                 Account Number
//               </Label>
//               <Input
//                 id="bankAccountNumber"
//                 type="text"
//                 value={formData.bankAccountNumber || ""}
//                 onChange={(e) =>
//                   updateFormData({ bankAccountNumber: e.target.value })
//                 }
//                 placeholder="Enter mosque bank account number"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label
//                 htmlFor="bankIFSC"
//                 className="text-primary-700 font-medium"
//               >
//                 IFSC Code
//               </Label>
//               <Input
//                 id="bankIFSC"
//                 type="text"
//                 value={formData.bankIFSC || ""}
//                 onChange={(e) => updateFormData({ bankIFSC: e.target.value })}
//                 placeholder="Enter IFSC code"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label
//                 htmlFor="bankAccountHolder"
//                 className="text-primary-700 font-medium"
//               >
//                 Account Holder Name
//               </Label>
//               <Input
//                 id="bankAccountHolder"
//                 type="text"
//                 value={formData.bankAccountHolder || ""}
//                 onChange={(e) =>
//                   updateFormData({ bankAccountHolder: e.target.value })
//                 }
//                 placeholder="Enter account holder name"
//                 className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MosqueFinancial;

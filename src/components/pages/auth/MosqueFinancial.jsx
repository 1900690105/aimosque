import Input from "../../ui/Input"
import Label from "../../ui/Label"
import Switch from "../../ui/Switch"
import { BanknoteIcon, CreditCard, Landmark, QrCode } from "../../icons/Icons"

function MosqueFinancial({ formData, updateFormData }) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <BanknoteIcon className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary-800">Financial Details</h3>
        <p className="text-sm text-primary-600 mt-1">Set up donation channels for your mosque</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg shadow-sm">
              <Landmark className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="bankAccount" className="text-primary-700 font-medium">
                Bank Account Number
              </Label>
              <Input
                id="bankAccount"
                type="text"
                value={formData.bankAccount}
                onChange={(e) => updateFormData({ bankAccount: e.target.value })}
                placeholder="Enter mosque bank account number"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
              <p className="text-xs text-primary-600">For direct bank transfers and donations</p>
            </div>
          </div>
        </div>

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
                value={formData.upiId}
                onChange={(e) => updateFormData({ upiId: e.target.value })}
                placeholder="Enter UPI ID"
                className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              />
              <p className="text-xs text-primary-600">For quick mobile payments</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="donationTracking" className="text-primary-700 font-medium">
                  Donation Tracking
                </Label>
                <Switch
                  id="donationTracking"
                  checked={formData.enableDonationTracking}
                  onChange={(e) => updateFormData({ enableDonationTracking: e.target.checked })}
                />
              </div>
              <p className="text-sm text-primary-600">
                Enable donation tracking to keep records of all donations and generate reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MosqueFinancial

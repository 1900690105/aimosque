import Card from "../../ui/Card"
import Label from "../../ui/Label"
import { CheckCircle2, Clock, Landmark, QrCode, User } from "../../icons/Icons"

function ReviewSubmit({ formData }) {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary-800">Review & Submit</h3>
        <p className="text-sm text-primary-600 mt-1">Verify your information before activating the mosque profile</p>
      </div>

      <Card className="border-0 shadow-lg overflow-hidden rounded-xl">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
          <h3 className="text-xl font-semibold">{formData.mosqueName || "Your Mosque"}</h3>
          <p className="text-sm opacity-90">Administered by {formData.fullName || "Admin"}</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-primary-500 mt-0.5" />
                <div>
                  <Label className="text-xs text-primary-500">Admin Information</Label>
                  <p className="font-medium text-primary-800">{formData.adminId}</p>
                  <p className="font-medium text-primary-800">{formData.fullName}</p>
                </div>
              </div>

              {(formData.bankAccount || formData.upiId) && (
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-primary-500 mt-0.5" />
                  <div>
                    <Label className="text-xs text-gray-500">Financial Details</Label>
                    {formData.bankAccount && <p className="font-medium text-gray-800">Bank: {formData.bankAccount}</p>}
                    {formData.upiId && (
                      <div className="flex items-center gap-2">
                        <QrCode className="h-4 w-4 text-primary-500" />
                        <p className="font-medium text-gray-800">{formData.upiId}</p>
                      </div>
                    )}
                    <p className="text-xs text-primary-600 mt-1">
                      Donation Tracking: {formData.enableDonationTracking ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                </div>
              )}

              {formData.mosqueHistory && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <Label className="text-xs text-gray-500">Mosque History</Label>
                  <p className="text-sm text-gray-700 mt-1">{formData.mosqueHistory}</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5" />
                <div className="flex-1">
                  <Label className="text-xs text-gray-500">Prayer Timings</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {Object.entries(formData.prayerTimings).map(([prayer, time]) =>
                      time ? (
                        <div
                          key={prayer}
                          className="bg-white p-2 rounded-lg border border-emerald-100 flex items-center justify-between"
                        >
                          <span className="capitalize text-sm font-medium text-gray-700">{prayer}:</span>
                          <span className="text-sm text-primary-600">{time}</span>
                        </div>
                      ) : null,
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-emerald-100 text-center">
            <p className="text-sm text-primary-700">
              By activating this profile, you confirm that all information provided is accurate and you have the
              authority to manage this mosque's digital presence.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ReviewSubmit

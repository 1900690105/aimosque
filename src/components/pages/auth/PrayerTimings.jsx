import Input from "../../ui/Input"
import Label from "../../ui/Label"
import { Clock } from "../../icons/Icons"

function PrayerTimings({ formData, updateFormData }) {
  const handlePrayerTimeChange = (prayer, time) => {
    updateFormData({
      prayerTimings: {
        ...formData.prayerTimings,
        [prayer]: time,
      },
    })
  }

  const prayers = [
    { id: "fajr", name: "Fajr", color: "from-blue-400 to-blue-500", icon: "🌅" },
    { id: "dhuhr", name: "Dhuhr", color: "from-amber-400 to-amber-500", icon: "☀️" },
    { id: "asr", name: "Asr", color: "from-orange-400 to-orange-500", icon: "🌇" },
    { id: "maghrib", name: "Maghrib", color: "from-red-400 to-red-500", icon: "🌆" },
    { id: "isha", name: "Isha", color: "from-indigo-400 to-indigo-500", icon: "🌙" },
    { id: "jummah", name: "Jummah", color: "from-emerald-400 to-emerald-500", icon: "🕌" },
  ]

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <Clock className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary-800">Prayer Timings</h3>
        <p className="text-sm text-primary-600 mt-1">Set the prayer schedule for your mosque</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prayers.map((prayer) => (
          <div key={prayer.id} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className={`bg-gradient-to-r ${prayer.color} h-2`}></div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{prayer.icon}</div>
                <Label htmlFor={prayer.id} className="text-white-800 font-medium text-lg">
                  {prayer.name}
                </Label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Clock className="h-4 w-4 text-primary-500" />
                </div>
                <Input
                  id={prayer.id}
                  type="time"
                  value={formData.prayerTimings[prayer.id]}
                  onChange={(e) => handlePrayerTimeChange(prayer.id, e.target.value)}
                  className="pl-10 border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  required={prayer.id !== "jummah"}
                />
              </div>
              {prayer.id === "jummah" && (
                <p className="text-xs text-gray-500 mt-2">Optional - Leave empty if not applicable</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative element */}
      <div className="flex justify-center mt-8 opacity-20">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0L110 10H90L100 0Z" fill="#10B981" />
          <path d="M80 10L90 20H70L80 10Z" fill="#10B981" />
          <path d="M120 10L130 20H110L120 10Z" fill="#10B981" />
          <path d="M60 20L70 30H50L60 20Z" fill="#10B981" />
          <path d="M140 20L150 30H130L140 20Z" fill="#10B981" />
          <path d="M100 20L110 30H90L100 20Z" fill="#10B981" />
        </svg>
      </div>
    </div>
  )
}

export default PrayerTimings

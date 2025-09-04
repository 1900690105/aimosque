import Input from "../../ui/Input"
import Label from "../../ui/Label"
import Textarea from "../../ui/Textarea"
import { Building2, FileImage, History, User } from "../../icons/Icons"

function MosqueRegistration({ formData, updateFormData }) {
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData({ mosqueImage: e.target.files[0] })
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary">Mosque Registration</h3>
        <p className="text-sm text-primary mt-1">Enter information about your mosque</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-primary font-medium flex items-center gap-2">
            <User className="h-4 w-4" /> Your Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            placeholder="Enter your full name"
            className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mosqueName" className="text-primary font-medium flex items-center gap-2">
            <Building2 className="h-4 w-4" /> Mosque Name
          </Label>
          <Input
            id="mosqueName"
            type="text"
            value={formData.mosqueName}
            onChange={(e) => updateFormData({ mosqueName: e.target.value })}
            placeholder="Enter mosque name"
            className="border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mosqueImage" className="text-primary font-medium flex items-center gap-2">
            <FileImage className="h-4 w-4" /> Mosque Image (Optional)
          </Label>
          <div className="border-2 border-dashed border-primary rounded-lg p-4 text-center hover:bg-emerald-50 transition-colors">
            <Input id="mosqueImage" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            <label htmlFor="mosqueImage" className="cursor-pointer block">
              <FileImage className="h-8 w-8 mx-auto text-primary mb-2" />
              <span className="text-sm text-primary font-medium">Click to upload image</span>
              <p className="text-xs text-primary mt-1">
                {formData.mosqueImage ? formData.mosqueImage.name : "JPG, PNG or GIF (max. 5MB)"}
              </p>
            </label>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="mosqueHistory" className="text-primary font-medium flex items-center gap-2">
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
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0L70 10H50L60 0Z" fill="#10B981" />
          <path d="M40 10L50 20H30L40 10Z" fill="#10B981" />
          <path d="M80 10L90 20H70L80 10Z" fill="#10B981" />
          <path d="M60 20L70 30H50L60 20Z" fill="#10B981" />
        </svg>
      </div>
    </div>
  )
}

export default MosqueRegistration

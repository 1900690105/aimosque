import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { LockKeyhole, User } from "../../icons/Icons";

function AdminLogin({ formData, updateFormData }) {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
            <LockKeyhole className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary">Admin Login</h3>
        <p className="text-sm .text-primary mt-1">
          Please enter your credentials to continue
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="adminId" className="text-primary font-medium">
            Admin ID
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-4 w-4 text-emerald-500" />
            </div>
            <Input
              id="adminId"
              type="text"
              value={formData.adminId}
              onChange={(e) => updateFormData({ adminId: e.target.value })}
              placeholder="Enter your Admin ID"
              className="pl-10 border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className=".text-primary font-medium">
            Password
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockKeyhole className="h-4 w-4 text-emerald-500" />
            </div>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
              placeholder="Enter your password"
              className="pl-10 border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="number" className="text-primary font-medium">
            Model No
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockKeyhole className="h-4 w-4 text-emerald-500" />
            </div>
            <Input
              id="number"
              type="number"
              value={formData.number}
              onChange={(e) => updateFormData({ number: e.target.value })}
              placeholder="Enter model number"
              className="pl-10 border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
      </div>

      <div className="pt-4 text-center">
        <a
          href="#"
          className="text-sm text-primary hover:text-primary-700 hover:underline"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
}

export default AdminLogin;

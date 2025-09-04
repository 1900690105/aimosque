import { User, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion"; // Import for animation

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Smooth entrance animation for login card only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-black/60 rounded-2xl p-8 max-w-md w-full space-y-4 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      >
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 mb-6 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center shadow-xl">
              <LockKeyhole className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            Admin Login
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Secure access to your admin panel
          </p>
        </div>

        <div className="space-y-5">
          {/* Admin ID */}
          <div className="space-y-2">
            <label
              htmlFor="adminId"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Admin ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <User className="h-5 w-5 text-slate-400 dark:text-slate-500" />
              </div>
              <input
                id="adminId"
                type="text"
                placeholder="Enter your Admin ID"
                className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <LockKeyhole className="h-5 w-5 text-slate-400 dark:text-slate-500" />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-purple-700 text-white font-bold py-3 px-4 rounded-xl
              hover:from-violet-600 hover:to-purple-800 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,69,193,0.5)]
              active:scale-[0.98] transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black/60"
            >
              Login
            </button>
          </div>
        </div>

        <div className="pt-4 text-center">
          <a
            href="#"
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:underline transition-colors duration-200"
          >
            Forgot your password?
          </a>
        </div>
      </motion.div>
    </div>
  );
}

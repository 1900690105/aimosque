function Switch({ className, ...props }) {
  return (
    <input
      type="checkbox"
      role="switch"
      className={`h-6 w-11 rounded-full bg-gray-200 cursor-pointer appearance-none transition-colors checked:bg-emerald-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all checked:after:translate-x-5 ${className || ""}`}
      {...props}
    />
  )
}

export default Switch

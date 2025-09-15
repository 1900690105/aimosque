
// Utility function to join class names
export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

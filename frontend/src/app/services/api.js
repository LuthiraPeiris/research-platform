export const API_ORIGIN = (
  import.meta.env.VITE_API_ORIGIN || "http://localhost:5000"
).replace(/\/$/, "");

const API_BASE_URL = `${API_ORIGIN}/api`;

export default API_BASE_URL;

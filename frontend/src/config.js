const HOSTNAME = window.location.hostname;
const LOCAL_HOSTNAMES = ['localhost', '127.0.0.1', '0.0.0.0', ''];
const defaultApiBase = HOSTNAME === 'jpureva-f5j6.onrender.com'
  ? 'https://jpureva-4.onrender.com/api'
  : LOCAL_HOSTNAMES.includes(HOSTNAME)
    ? 'http://localhost:5000/api'
    : `http://${HOSTNAME}:5000/api`;

export const API_BASE = import.meta.env.VITE_API_BASE_URL || defaultApiBase;

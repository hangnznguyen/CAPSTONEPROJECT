
const BASE_URL = import.meta.env.VITE_API_URL || 'https://your-backend.com/api'; // Use .env or fallback

async function handleResponse(res) {
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'API request failed');
  }
  return res.json();
}

export async function get(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  return handleResponse(res);
}

//post function for posting data
export async function post(path, data) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return handleResponse(res);
}
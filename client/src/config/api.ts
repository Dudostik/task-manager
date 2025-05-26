export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/';

export const apiFetch = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // Для отправки cookie
  });

  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${await response.text()}`);
  }

  return response.json();
};

export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};


import { API_URL } from "../consts";

async function fetchAPI(url: string, query: string) {
  const res = await fetch(`${API_URL}${url}?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data;
}

export async function getAllVendors(query: string) {
  const data = await fetchAPI('restaurant/vendors-list', query);
  return data;
}

type TdefaultQuery = {
  page: string,
  page_size: string,
  lat: string,
  long: string,
};

export const DEFAULT_QUERY: TdefaultQuery = {
  page: "0",
  page_size: "10",
  lat: "35.754",
  long: "51.328",
};

export const API_URL = "https://snappfood.ir/mobile/v3/"

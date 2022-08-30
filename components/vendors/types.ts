export type TVendorData = {
  id: string,
  logo?: string,
  title: string,
  rate?: number
  voteCount?: number;
  description?: string;
  deliveryFee?: number;
  isZFExpress?: boolean;
  backgroundImage?: string;
  deliveryTime?: number;
}

export type TVendorProps = {
  vendor: TVendorData
}

export type TVendorsProps = {
  list: Array<{}>
}


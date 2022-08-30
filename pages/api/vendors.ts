import { NextApiRequest, NextApiResponse } from "next";
import { getAllVendors } from "../../lib/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const reqQuery: any = req.query;
  const query = new URLSearchParams(reqQuery).toString();
  const data = await getAllVendors(query);
  res.send({ data });
};

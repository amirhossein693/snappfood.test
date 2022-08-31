import handleViewport from "react-in-viewport";
import styles from "./vendors.module.scss";
import type { TVendorsProps } from "./types";
import Vendor from "./Vendor";
import { getVendors, getVendorsSuccess, selectVendorsState } from "../../store/vendorsSlice";
import { getAllVendors } from "../../lib/api";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_QUERY } from "../../consts";

const Block = (props: { inViewport: boolean, forwardedRef: any }) => {
  const { forwardedRef } = props;
  return (
    <div ref={forwardedRef} />
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Vendors = ({ keys, list }: TVendorsProps) => {

  const { page } = useSelector(selectVendorsState);
  const pageSize = parseInt(DEFAULT_QUERY.page_size, 0)
  const currentPage = parseInt(page, 0); 
  const nextPage = currentPage+1; 

  const dispatch = useDispatch();

  const fetchData = async () => {
    const newQueryObject = {
      ...DEFAULT_QUERY,
      page: nextPage.toString()
    }
    const query = new URLSearchParams(newQueryObject).toString();
    dispatch(getVendors(newQueryObject));
    const data = await getAllVendors(query);
    return dispatch(getVendorsSuccess(data));
  };

  return (
    <div className={styles["c-vendors"]}>
      {keys?.map((key) => {
        const { data, type }: any = list?.[key];
        if (type === "VENDOR") {
          return <Vendor key={data?.id} vendor={data} />;
        }
      })}
      {(keys?.length ?? 0) > ((currentPage + 1) * pageSize) &&
        <ViewportBlock
          onEnterViewport={fetchData}
        />
      }
    </div>
  );
};

export default Vendors;

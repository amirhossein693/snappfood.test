import styles from './vendors.module.scss';
import type { TVendorsProps } from "./types";
import Vendor from "./Vendor";

const Vendors = ({list}: TVendorsProps) => {
  return (
    <div className={styles['c-vendors']}>
      {list?.map(item => {
        const { data, type }: any = item;
        if (type === "VENDOR") {
          return <Vendor key={data?.id} vendor={data} />
        }
      })}
    </div>
  );
};

export default Vendors;

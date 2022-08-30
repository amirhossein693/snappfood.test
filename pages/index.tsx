import styles from './home.module.scss';
import type { NextPage } from "next";
import {
  getVendors,
  getVendorsFailure,
  getVendorsSuccess,
  selectVendorsState,
} from "../store/vendorsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { wrapper } from "../store/store";
import { getAllVendors } from "../lib/api";
import { DEFAULT_QUERY } from "../consts";
import Vendors from "../components/vendors";

const query = new URLSearchParams(DEFAULT_QUERY).toString();

const Home: NextPage = () => {
  const { list, loading, fetched } = useSelector(selectVendorsState);
  const dispatch = useDispatch();
  
  const fetchData = async () => {
    dispatch(getVendors(query));
    const data = await getAllVendors(query);
    return dispatch(getVendorsSuccess(data));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!fetched && loading && "loading"}
      {fetched && list && <main className={styles['p-home']}><Vendors list={list} /></main>}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async () => {
      store.dispatch(getVendors(query));
      const data = await getAllVendors(query);
      store.dispatch(getVendorsSuccess(data));
      return {
        props: {
          vendorsState: { list: data },
        },
      };
    }
);

export default Home;

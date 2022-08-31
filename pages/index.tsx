import styles from "./home.module.scss";
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
import simpleSerializer from "../utils/simpleSerializer";

const query = new URLSearchParams(DEFAULT_QUERY).toString();

const Home: NextPage = () => {
  const { keys, list, loading } = useSelector(selectVendorsState);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(getVendors(DEFAULT_QUERY));
    const data = await getAllVendors(query);
    return dispatch(getVendorsSuccess(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className={styles["p-home"]}>
      {loading && "loading"}
      {list && <Vendors keys={keys} list={list} />}
    </main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getVendors(DEFAULT_QUERY));
    const data = await getAllVendors(query);
    store.dispatch(getVendorsSuccess(data));
    const { keys, list } = simpleSerializer(data?.finalResult);
    return {
      props: {
        vendorsState: {
          loading: false,
          fetched: true,
          keys,
          list,
        },
      },
    };
  }
);

export default Home;

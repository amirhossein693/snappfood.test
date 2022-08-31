const simpleSerializer = (collection) => {
  const list = {};
  const keys = collection?.map((item) => {
    list[item.data.id ?? 0] = item;
    return item.data.id ?? 0;
  });
  return {
    keys,
    list,
  };
};

export default simpleSerializer;

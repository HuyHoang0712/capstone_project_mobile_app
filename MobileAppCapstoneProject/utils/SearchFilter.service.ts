const searchByKey = (key: string, value: string, data: any) => {
  return data.filter((item: any) => {
    return item[key].toLowerCase().includes(value.toLowerCase());
  });
};
export const SearchFilter = {
  searchByKey,
};

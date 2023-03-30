import { useSelector } from "react-redux";

const useData = (text) => {
  const results = [];
  const data = useSelector((state) => state.slice.data);
  const searchTerm = text.toUpperCase().split(" ").join("");

  if (searchTerm.length < 3) {
    return [];
  }

  for (let cl of data) {
    const title = cl.subject + cl.cid;
    if (title.toUpperCase().indexOf(searchTerm) != -1) {
      results.push(cl);
    }
  }
  return results;
};

export { useData };

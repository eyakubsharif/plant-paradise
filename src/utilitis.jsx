import { toast } from "react-toastify";

const getDataFromLocalStorage = () => {
  const stringData = localStorage.getItem("wishList");
  if (stringData) {
    const jsonData = JSON.parse(stringData);
    return jsonData;
  }
  return [];
};

const addItemToLocalStorage = (id) => {
  const storedData = getDataFromLocalStorage();
  if (storedData.includes(id)) {
    toast.warning("already exist");
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("wishList", data);
    toast.success('Added to MyPlant')
  }
};
const removeFromLocalStorage = (id) => {
  const storedData = getDataFromLocalStorage();
  const remainingData = storedData.filter((item) => item !== id);
  localStorage.setItem("wishList", JSON.stringify(remainingData));
  toast.error("Removed from MyPlant");
};

export { getDataFromLocalStorage, addItemToLocalStorage ,removeFromLocalStorage };

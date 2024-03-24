const saveData = (array) => {
  localStorage.setItem("data", JSON.stringify(array));
};

const getData = () => {
  const data = localStorage.getItem("data");
  return data === null ? [] : JSON.parse(data);
};

export { saveData, getData };

const authHandler = (error) => {
  if (error.response.status) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "register";
    }
  }
};
const logOut = () => {
  localStorage.clear();
  window.location = "register";
};
const getToken = async () => {
  const token = await localStorage.getItem("token");
  if (token && token !== "") return token;
  return null;
};

module.exports = { getToken, authHandler, logOut };

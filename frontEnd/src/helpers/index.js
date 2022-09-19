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
  window.location = "/";
};
const getToken = async () => {
  const token = await localStorage.getItem("token");
  if (token && token !== "") return token;
  return null;
};
const GetUserDetails = async () => {
  const fname = localStorage.getItem("firstname");
  const lname = localStorage.getItem("lastname");
  const Email = localStorage.getItem("email");
  const allDetails = [fname, lname, Email];
  return allDetails;
};
module.exports = { getToken, authHandler, logOut, GetUserDetails };

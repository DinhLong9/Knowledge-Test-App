export const checkLogin = (status) => {
  return {
    type: "Is_Login",
    status: status,
  };
};

import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/loginAction";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  deleteAllCookies();
  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}

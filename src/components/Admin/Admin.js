import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
import PoshContext from "../../PoshContext";

const Admin = () => {
  const { isLogged, authHandler } = useContext(PoshContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  const loginBtnHadler = () => {
    authHandler(true);
  };

  return (
    <div className="admin">
      <div className="admin-login-container">
        <div className="wrapper">
          <div className="admin-login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Login</h1>

              <input
                type="text"
                placeholder="ENTER USERNAME"
                {...register("adminusername", { required: true, minLength: 8 })}
              />
              {errors.adminusername && (
                <p className="form-err-text">Minimum 8 Character Required</p>
              )}

              <input
                type="password"
                placeholder="ENTER PASSWORD"
                {...register("adminpassword", { required: true, minLength: 8 })}
              ></input>
              {errors.adminpassword && (
                <p className="form-err-text">Minimum 8 Character Required</p>
              )}
              <div className="admin-login-btn-container">
                <Link to={"main/dashboard"}>
                  <button
                    onClick={loginBtnHadler}
                    type="submit"
                    className="btn btn-light"
                  >
                    LOGIN
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

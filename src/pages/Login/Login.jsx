import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginWithEmailAndPassword, loginWithGoogle } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    const toastId = toast.loading("loading...");
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    loginWithEmailAndPassword(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
        });
        toast.remove(toastId);
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
        toast.remove(toastId);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-none focus:outline-none"
                {...register("email", { required: true })}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-none focus:outline-none"
                {...register("password", { required: true })}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary rounded-none">
                Login
              </button>
            </div>
          </form>
          <div className="form-control rounded-full px-7">
            <button type="submit" className="btn  border-2 border-blue-400 rounded-none ">
              Login
            </button>
          </div>
          <div>
            <p>
              Don't Have Account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

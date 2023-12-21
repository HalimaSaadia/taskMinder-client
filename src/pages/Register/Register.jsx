import { data } from "autoprefixer";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const toastId = toast.loading("loading...");

    const email = data.email;
    const password = data.password;
    const name = data.name;

    try {
      const imageUrl = await axios.post(
        "https://api.imgbb.com/1/upload?key=bb2268c0e82d269ae0139798d1d2580f",
        { image: data.image[0] },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const displayUrl = imageUrl.data?.data?.display_url;

      createUser(email, password)
        .then((result) => {
          Swal.fire({
            title: "Successfully Registered",
            icon: "success",
          });
          updateUserProfile(name, displayUrl)
            .then(() => {})
            .catch((err) => {
              toast.remove(toastId);

              Swal.fire({
                title: err?.message,
                icon: "error",
              });
            });
          toast.remove(toastId);
        })
        .catch((err) => {
          toast.remove(toastId);

          Swal.fire({
            title: err?.message,
            icon: "error",
          });
        });
    } catch (error) {
      toast.remove(toastId);
      console.log(error);
      Swal.fire({
        title: error?.response?.data?.error?.message,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered rounded-none focus:outline-none"
                {...register("name", { required: true })}
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                placeholder="password"
                className="input input-bordered rounded-none focus:outline-none"
                {...register("image", { required: true })}
                required
              />
            </div>

            <div className="form-control mt-2">
              <button type="submit" className="btn bg-[#14191E] rounded-none">
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center">
            <p>
              Already Have Account?{" "}
              <Link className="text-blue-400" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

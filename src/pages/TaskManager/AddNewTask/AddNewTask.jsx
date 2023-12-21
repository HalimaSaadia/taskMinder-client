import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddNewTask = () => {
    const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, control,reset } = useForm({
    defaultValues:{
        priority:"low",
        status:"pending"
    }
  });
  const {user} = useContext(AuthContext)
  const onSubmit = (data) => {
   
    // const toastId = toast.loading("loading...");
    const userEmail = user?.email
    data.user = userEmail
    axiosPublic.post("/add-task",data)
    .then(result => console.log(result.data))
    reset()
  };
  return (
    <div className="flex justify-center py-5">
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn bg-[#415a77] text-white rounded-none px-10"
      >
        Add New Task
      </button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-none">
          <div className="card shrink-0 w-full h-fullshadow-2xl rounded-none bg-base-100">
            <form
            
              className="card-body"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered rounded-none focus:outline-none"
                  {...register("title", { required: true })}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered rounded-none focus:outline-none"
                  {...register("description", { required: true })}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  placeholder="Set Deadline"
                  className="input input-bordered rounded-none focus:outline-none appearance-none"
                  {...register("deadline", { required: true })}
                  required
                />
              </div>
              <div className="form-control">
                <Controller
                  name="priority"
                  control={control}
                  
                  render={({ field }) => (
                    <select
                   
                      {...field}
                      className="select select-bordered w-full rounded-none  focus:outline-none"
                  
                    >
                      <option value="low">
                        Low
                      </option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                    </select>
                  )}
                />
              </div>
              <div className="form-control">
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <select
                   
                      {...field}
                     
                      className="select select-bordered w-full rounded-none  focus:outline-none"
                    //  defaultValue="pending"
                    placeholder="Status"
                    >
                      <option value="pending">
                        Pending
                      </option>
                      <option value="on-going">On Going</option>
                      <option value="completed">Completed</option>
                    </select>
                  )}
                />
              </div>
              <div className="form-control  mt-6">
                <input
                  type="submit"
                  className="btn bg-[#14191E] rounded-none"
                />
              </div>
              {/* if there is a button in form, it will close the modal */}
              
            </form>
            <form   method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 -top-2 ">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddNewTask;

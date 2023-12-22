import { FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const TaskCard = ({ task,border,fetch }) => {
 console.log(border);
  const { title, description, priority,_id } = task;
  const {pendingTaskRefetch,onGoingTaskRefetch,completedTaskRefetch} = fetch
  
  const axiosPublic = useAxiosPublic()
  const handleDelete=(id) => {
    const toastId = toast.loading("Loading...")
    axiosPublic.delete(`/delete-task/${id}`)
    .then(result => {
      Swal.fire({
        title:"Successfully Deleted",
        icon:"success"
      })
      pendingTaskRefetch()
      onGoingTaskRefetch()
      completedTaskRefetch()
      toast.remove(toastId)
    })
    .catch(err=>{
      Swal.fire({
        title:err.message,
        icon:"error"
      })
      toast.remove(toastId)
    })
  }
  return (
    <div className={`card rounded-none bg-neutral md:h-52 `} style={{borderTop:`5px solid ${border}`}}>
      <div className="card-body px-3 ">
        <h2 className="card-title  text-white">{title}</h2>
        <p className="text-neutral-content">{description.slice(0, 100)} ...</p>
        <p className="text-md font-bold">
          <span className="text-white">Priority</span>: {priority}
        </p>
      </div>
      <div className="card-actions justify-end px-5 pb-5">
       <button onClick={()=> handleDelete(_id)}> <FaTrashAlt className="text-red-400 text-lg" /></button>
      </div>
    </div>
  );
};

export default TaskCard;

import { FaTrashAlt } from "react-icons/fa";


const TaskCard = ({ task,border }) => {
 console.log(border);
  const { title, description, priority,_id } = task;
  const handleDelete=(id) => {

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

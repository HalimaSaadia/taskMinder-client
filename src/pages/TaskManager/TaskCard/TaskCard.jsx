


const TaskCard = ({ task,border }) => {
 console.log(border);
  const { title, description, priority } = task;
  return (
    <div className={`card rounded-none bg-neutral h-48 `} style={{borderTop:`5px solid ${border}`}}>
      <div className="card-body px-3">
        <h2 className="card-title  text-white">{title}</h2>
        <p className="text-neutral-content">{description.slice(0, 100)} ...</p>
        <p className="text-md font-bold">
          <span className="text-white">Priority</span>: {priority}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;

import React, { useContext, useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";
import TaskCard from "../TaskCard/TaskCard";

const TaskManager = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data:pendingTask, isPending:pendingTaskLoading } = useQuery({
    queryKey: ["pendingTask"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/pending-task/${user?.email}`);
      console.log(result.data);
      return result.data;
    },
  });

  const { data:onGoingTask, isPending:onGoingTaskLoading } = useQuery({
    queryKey: ["onGoingTask"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/onGoing-task/${user?.email}`);
      console.log(result.data);
      return result.data;
    },
  });
  const { data:completedTask, isPending:completedTaskLoading } = useQuery({
    queryKey: ["completedTask"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/completed-task/${user?.email}`);
      console.log(result.data);
      return result.data;
    },
  });

  return (
    <div>
      <AddNewTask />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="space-y-5 ">
            <h1 className="text-3xl text-center">TO DO</h1>
          {pendingTask?.map((task) => (
            <TaskCard key={task._id} task={task} border="#ffbe0b" />
          ))}
        </div>
        <div className="space-y-5">
        <h1 className="text-3xl text-center">ON GOING</h1>
          {onGoingTask?.map((task) => (
            <TaskCard key={task._id} task={task} border="#DFA0AC" />
          ))}
        </div>
        <div className="space-y-5">
        <h1 className="text-3xl text-center">Completed</h1>
          {completedTask?.map((task) => (
            <TaskCard key={task._id} task={task} border="#5ECD88" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;

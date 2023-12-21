import React, { useContext } from 'react';
import AddNewTask from '../AddNewTask/AddNewTask';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { AuthContext } from '../../../Provider/AuthProvider';

const TaskManager = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {data:pendingTask} = useQuery({
        queryKey:["pendingTask"],
        queryFn: async()=> {
            const result = await axiosPublic.get(`/pending-task/${user?.email}`)
            console.log(result.data);
            return result.data
        }
    })
    console.log(pendingTask);
    return (
        <div>
            <AddNewTask />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            </div>
        </div>
    );
};

export default TaskManager;
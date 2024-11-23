import React from 'react';
import { Users } from 'lucide-react';
import StatsOverview from './StatsOverview';
import TasksChart from './TasksChart';
import AssignedTasksList from './AssignedTasksList';
import DashboardCalendar from './DashboardCalendar';
import RecentActivity from './RecentActivity';

const DashboardAssigned = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <StatsOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Tasks statistics</h2>
              <div className="flex items-center space-x-2">
                <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>To Do</option>
                </select>
                <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
            </div>
            <TasksChart />
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold">Today's tasks</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    Assigned to me
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-full">
                    I Assigned to others
                  </button>
                </div>
              </div>
              <button className="text-blue-600 text-sm">See all tasks</button>
            </div>
            <AssignedTasksList />
          </div>
        </div>
        
        <div className="space-y-6">
          <DashboardCalendar />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashboardAssigned;
import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import StatsOverview from './StatsOverview';
import TasksChart from './TasksChart';
import TasksList from './TasksList';
import DashboardCalendar from './DashboardCalendar';
import RecentActivity from './RecentActivity';

const DashboardMain = () => {
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
          
          <TasksList />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Calendar</h2>
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </button>
                <span className="text-sm font-medium">April 2024</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <DashboardCalendar />
          </div>
          
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
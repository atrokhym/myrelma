import React from 'react';
import StatsOverview from './StatsOverview';
import CurrentProjects from './CurrentProjects';
import TasksList from './TasksList';
import DashboardCalendar from './DashboardCalendar';
import RecentMessages from './RecentMessages';

const DashboardProjects = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <StatsOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CurrentProjects />
          <TasksList />
        </div>
        
        <div className="space-y-6">
          <DashboardCalendar />
          <RecentMessages />
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
import React from 'react';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import TabNav from './Navigation/TabNav';
import SearchBar from './Companies/SearchBar';
import CompanyList from './Companies/CompanyList';
import CompanyGrid from './Companies/CompanyGrid';

function Dashboard() {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <TabNav />
        <main className="flex-1 overflow-auto">
          <div className="flex items-center justify-between py-4 px-6">
            <SearchBar />
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                }`}
              >
                List
              </button>
            </div>
          </div>
          {viewMode === 'grid' ? <CompanyGrid /> : <CompanyList />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
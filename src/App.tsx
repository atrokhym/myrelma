import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import DashboardMain from './components/Dashboard/DashboardMain';
import DashboardAssigned from './components/Dashboard/DashboardAssigned';
import DashboardProjects from './components/Dashboard/DashboardProjects';
import CompanyList from './components/Companies/CompanyList';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import Layout from './components/Layout';
import { MessagesPage } from './components/Messages/MessagesPage';
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashboardMain />} />
              <Route path="companies" element={<CompanyList />} />
              <Route path="messages" element={<MessagesPage />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import DashboardMain from './components/Dashboard/DashboardMain';
import CompanyList from './components/Companies/CompanyList';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import Layout from './components/Layout';
import { MessagesPage } from './components/Messages/MessagesPage';
import { CalendarPage } from './components/Calendar';
import { ContactsPage } from './components/Contacts/ContactsPage';

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
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="contacts" element={<ContactsPage />} />
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
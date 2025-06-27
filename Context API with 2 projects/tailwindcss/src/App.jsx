import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Profile from './components/Profile';
import Login from './components/Login';
import { useContext } from 'react';
import UserContext from './context/UserContext';

function AppContent() {
  const { user } = useContext(UserContext);

  return user ? <Profile /> : <Login />;
}

function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  );
}

export default App;

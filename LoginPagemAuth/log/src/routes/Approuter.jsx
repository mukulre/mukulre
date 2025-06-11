import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import { useLogin } from '../contexts/LoginContext';

constPrivateRoute = ({ children }) => {
    const { currentUser } = useLogin();
    return currentUser ? children : <Navigate to="/login" />;
};

const Approuter=() => (
    <Router>
        <MainLayout>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </MainLayout>
    </Router>
);

export default Approuter

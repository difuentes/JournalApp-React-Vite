import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage,ResgisterPage} from '../pages';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<ResgisterPage/>}/>
            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
    )
}
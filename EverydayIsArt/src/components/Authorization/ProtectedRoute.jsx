import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import useLoginAction from '../hooks/useLoginAction.jsx';

function ProtectedRoute({ redirectPath = '/login', children }) {
    const { user } = useLoginAction();

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
}

ProtectedRoute.propTypes = {
    redirectPath: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element)
};

export default ProtectedRoute;
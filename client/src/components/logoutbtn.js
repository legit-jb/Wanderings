import React from 'react'
import { useHistory } from 'react-router-dom'
import API from '../utils/API'

const Logout = () => {
const history = useHistory();

const logoutFunc = () => {
    API.logout();
    history.push('/')
}

return(
    <div>
        <button className="btn btn-outline-light" onClick={logoutFunc}>
            Log Out
        </button>
    </div>
)
}

export default Logout;
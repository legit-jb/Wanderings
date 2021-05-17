import React from 'react'
import API from '../utils/API'

const Logout = () => {
return(
    <div>
        <button className="btn btn-outline-light" onClick={() => API.logout}>
            Log Out
        </button>
    </div>
)
}

export default Logout;
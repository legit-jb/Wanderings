import React from 'react'
import API from '../utils/API'

const Logout = () => {
render(
    <div>
        <button onClick={() => API.logout}>
            Log Out
        </button>
    </div>
)
}
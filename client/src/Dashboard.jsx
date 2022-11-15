import React, { useEffect, useState } from 'react';


function Dashboard() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:5001/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);
    

    return (
        <div>
            {(typeof backendData.posts === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.posts.map((post, i) => (
                    <p key={i}>{post}</p>
                ))
            )}

        </div>
 
    )
}

export default Dashboard;
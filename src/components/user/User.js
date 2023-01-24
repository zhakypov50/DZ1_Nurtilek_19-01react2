import { useState } from "react"

export default function User ({userInfo}) {
    const [user, setUser] = useState({address: ''})

    const getUserInfo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                if(response.status === 200) {
                    return response.json()
                }else {
                    throw response.status
                }
            })
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>{userInfo.name}</h3>
            <button value={userInfo.id} onClick={() => {getUserInfo(userInfo.id)}}>подробнее</button>
            <p>----------------------------</p>
            {
                <ul>
                    <li>name: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>city: {user.address.city}</li>
                </ul>
            }
        </div>
    )
}
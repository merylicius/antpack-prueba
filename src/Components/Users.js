import React, { useEffect, useState } from 'react'
import { getUsers } from '../API';

const Users = () => {

    //users state
    const [usersList, setUsersList] = useState([]);
    //loading state
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        //get data of Users
        const getData = async () => {
            const users = await getUsers();

            setUsersList(users);
            setLoading(false);

        }

        getData();

    }, [])

    return (
        <>
            <div className="is-flex is-justify-content-center mt-6 mb-6"><h1 className="title">Listado de Usuarios</h1></div>
        {loading ? <div className="is-flex is-justify-content-center"><h1>Cargando...</h1></div>
        :(!usersList ? <div className="is-flex is-justify-content-center"><h1>No Hay Registros</h1></div> 
        : (usersList.map((user) => (
            <div key ={user.id} className="card">
                <div className="card-content ml-6">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={`https://ui-avatars.com/api/?name=${user.name}background=AA5C00&color=8b5d5d&rounded=true`} alt="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{user.name}</p>
                            <p className="subtitle is-6">{user.email}</p>
                        </div>
                    </div>

                    <div className="content">
                        <strong>Compañia: </strong> {user.company.name}
                        <br />
                        <strong>Ciudad: </strong>{user.address.city}
                    </div>
                </div>
            </div>
        )))) }
            

        </>
    )
}

export default Users

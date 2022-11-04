import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user,logOut } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res =>{ 
                if(res.status===401 || res.status=== 403){
                    logOut()
                }
              return res.json()
            })
            .then(data => setOrders(data))

    }, [user?.email])

    const handleDelete =(id)=>{
        const proceed= window.confirm('Are you sure cancel')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = orders.filter(odr=> odr._id !== id);
                    setOrders(remaining)
                }
            })

        }
    }

    const handleStatusUpdate = (id)=>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'approved'})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);

            if(data.modifiedCount > 0){
                const remaining =orders.filter(odr => odr._id !== id);
                
                const approving = orders.find(odr => odr._id === id);

                approving.status = 'Approved'

                const newOrders=[...remaining,approving]
                
                setOrders(newOrders);
            }
        })
    }


    return (
        <div className="w-full">
            <table className="table">
               
                <thead>
                    <tr>
                       <th>image</th>
                        <th>id</th>
                        <th>serviceName & price</th>
                        <th>email</th>
                        <th>text</th>
                    </tr>
                </thead>
                <tbody>
                   
                 
                    {
                        orders.map(order=><OrderRow 
                            key={order._id} 
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}>

                            </OrderRow>)
                    }
                   
                   
                </tbody>
                
                

            </table>
        </div>
    );
};

export default Orders;
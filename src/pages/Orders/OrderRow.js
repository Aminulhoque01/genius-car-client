import React, { useEffect, useState } from 'react';

const OrderRow = ({ order,handleDelete,handleStatusUpdate }) => {
    const {_id, servicesName, price, phone, email, customer, text, services,status } = order;
    const [orderServeces, setOrderServices] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${services}`)
            .then(res => res.json())
            .then(data => setOrderServices(data))

    }, [services])

  

    return (
        <div>
            <tr>
                <label>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>x</button>
                </label>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className=" h-12">
                                {
                                    orderServeces?.img &&
                                    <img src={orderServeces.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{services}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {servicesName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>{email}</td>
                <th>
                    {/* <button className="btn btn-ghost btn-xs">{text}</button> */}
                    <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
                </th>
            </tr>
        </div>
    );
};

export default OrderRow;
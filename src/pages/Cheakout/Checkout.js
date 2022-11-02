
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const services =useLoaderData();
    const {_id,title, price,name }= services;
    const {user} = useContext(AuthContext);

    const handlesubmit=(event)=>{
        event.preventDefault();
        const form= event.target;
        const firstName= `${form.firstName.value} ${form.lastName.value}`;
        const phone= form.phone.value;
        const email= user?.email || 'unregistered'
        const text= form.text.value;

        const order ={
            services:_id,
            servicesName: title,
            price,
            customer: name,
            email,
            phone,
            text,
        }


        // if(phone.length >10){
        //     alert('phone number should be 10 character');
        // }

        fetch('http://localhost:5000/orders', {

            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
            
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
            }
        })
        .catch(error=> console.error(error))

    }

    return (
        <div>
            <div className='mb-5'>
                <h2 className='text-4xl'>You are about the order : {title}</h2>
                <h4 className='text-4xl'>Prices : ${price}</h4>
            </div>
            <form onSubmit={handlesubmit}>
                <div className='grid grid-cols-1 lg:grid grid-cols-2 gap-4 my-10'>
                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='text' className="textarea input-bordered  w-full" placeholder="Bio"></textarea>
                <input className='btn mb-4 bg-orange-600' type="submit" value="Please Now Order" />
            </form>
        </div>

    );
};

export default Checkout;
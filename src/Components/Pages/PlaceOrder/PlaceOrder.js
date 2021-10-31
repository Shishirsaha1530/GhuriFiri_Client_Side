import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from './../../../Hooks/useAuth';

const PlaceOrder = () => {
    let {user} = useAuth()
    const { register, handleSubmit, reset} = useForm();
    const [details, setDetails] = useState({})
    const { id } = useParams();


    const onSubmit = data =>{
     data.details = details;
    data.email = user.email;
 
    fetch(`https://gruesome-grave-01200.herokuapp.com/addOrders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("Order Placed Successfully");
          reset();
        }
      });

    } 


    useEffect(()=>{
        fetch(`https://gruesome-grave-01200.herokuapp.com/packages/${id}`)
        .then(res=>res.json())
        .then(data=> setDetails(data)) 
    },[])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>

                    <div className="card shadow-lg  bg-body rounded" >
                    <img src={details.img} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>

                    <div className="card-body">
                        <h5 className="card-title">Package: {details.name} </h5>
                        <p className="card-text cardText">{details.description}</p>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Package Duration: {details.duration} Days </li>
                        <li className="list-group-item">Package Fee: {details.price} taka</li>
                    </ul>
                </div>
                </div>


                <div className='col-md-6'>
                    <h5 className='text-center'>Place Order Now </h5>
                        <form onSubmit={handleSubmit(onSubmit)}>  

                        <input className='form-control mb-2' defaultValue={user.displayName} {...register("name")} />

                        <input className='form-control mb-2' defaultValue={user.email} {...register("email", { required: true })} />
                        
                        <input className='form-control mb-2' placeholder="Address" defaultValue="" {...register("address")} />

                        <input className='form-control mb-2' placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" className='btn btn-success' />

                        </form>
                </div>
            </div>

            
        </div>
    );
};

export default PlaceOrder;
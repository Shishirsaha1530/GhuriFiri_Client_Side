import React, { useEffect, useState } from "react";
import useAuth from './../../../Hooks/useAuth';


const MyOrders = () => {

    let {user} = useAuth()
    const [orders, setOrders] = useState([]);

     const email = user.email;

    useEffect(() => {
    fetch(`https://gruesome-grave-01200.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

      let handleDelete =(id)=>{
          const confirmed = window.confirm("Are You Sure to Cancel Your Order?")
          if(confirmed){
         const url = `https://gruesome-grave-01200.herokuapp.com/myOrders/${id}`;
         fetch(url, {
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount){
                 alert('Order Cancelled Successfully')
                const remainingOrder = orders.filter(order=>order._id !== id)
                console.log(remainingOrder)
                setOrders(remainingOrder)
             }
         }) 
         }
    }

    return (
       <div className='mt-4 pb-3 container'>
       
            <div className="main">
                 <h4 className="title"> All Placed Orders</h4>
            </div>
            
            <div className='row mt-3 gy-4'>
                    {
                        orders.map((item)=>{
                            return(
                                                
                        <div className='col-md-4 mx-auto' key={item.details._id}>
                            <div className="card shadow-lg  bg-body rounded" >
                            <img src={item.details.img} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>
                            <div className="card-body">
                             <h5 className="card-title">Package: {item.details.name} </h5>
                             <p className="card-text cardText">{item.details.description}</p>
                             </div>
                            <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Package Duration: {item.details.duration} Days </li>
                                 <li className="list-group-item">Package Fee: {item.details.price} taka</li>
                                 <li className="list-group-item text-danger"> Status : Pending </li>
                            </ul>
                                
                                <button onClick={()=>handleDelete(item._id)} className='btn btn-danger'> Cancel Order </button>
                         </div>  
                                    
                                </div>           
                                )
                            })
                    }
            </div>
        </div>
    );
};

export default MyOrders;
import React, { useEffect, useState } from "react";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
 
    useEffect(() => {
    fetch(`https://gruesome-grave-01200.herokuapp.com/myOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
                 alert('Order Removed Successfully')
                const remainingOrder = orders.filter(order=>order._id !== id)
                console.log(remainingOrder)
                setOrders(remainingOrder)
             }
         }) 
         }
    }

    let handleApprove=(id)=>{
        console.log(id)
    }

    return (
       <div className='mt-4 pb-3 container'>
       
            <div className="main">
                 <h4 className="title"> All Orders</h4>
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
                             <p className="card-text cardText">{item.detailsdescription}</p>
                             </div>
                            <ul className="list-group list-group-flush">
                                 <li className="list-group-item"> Customer Name: {item.name} </li>
                                 <li className="list-group-item">Customer Email: {item.email} </li>
                                 <li className="list-group-item"> Phone Number: {item.phone} </li>
                                 <li className="list-group-item"> <button onClick={()=>handleApprove(item.details._id)} className='btn btn-warning'> Approve Order </button>  </li>
                            </ul>
                                <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}> Remove Order </button>
                         </div>  
                                    
                    </div>           
                                )
                            })
                    }
            </div>
        </div>
    );
};

export default ManageOrder;



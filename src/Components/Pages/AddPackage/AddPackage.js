import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddPackage = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
        axios.post('https://gruesome-grave-01200.herokuapp.com/packages', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('New Package Has Been Added');
                    reset();
                }
            })
  } 
    return (
        
        <div className='mt-5 container'>
            <div className='bg-dark mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Add New Package </h4>
            </div>
            
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='form-control mb-3' {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />

                    <textarea className='form-control mb-3' {...register("description")} placeholder="Description" />

                    <input className='form-control mb-3' type="number" {...register("duration")} placeholder="PackageDuration" />

                    <input className='form-control mb-3' type="number" {...register("price")} placeholder="PackagePrice" />

                    <input className='form-control mb-3' {...register("img")} placeholder="image url" />

                    <input type="submit" className='btn btn-success' />

                     </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;
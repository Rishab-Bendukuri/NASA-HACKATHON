import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

function Form() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/find?one=1.2&two=2.67&three=13569&four=5.483974&five=16.73')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    },[])

    function submit(e){
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='one'>est_diameter_min</label>
                    <input placeholder='est_diameter_min' type="text" id="one" className="form-control" {...register("one",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='two'>est_diameter_min</label>
                    <input placeholder='est_diameter_max' type="text" id="two" className="form-control" {...register("two",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='one'>est_diameter_min</label>
                    <input placeholder='est_diameter_min' type="text" id="one" className="form-control" {...register("one",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='one'>est_diameter_min</label>
                    <input placeholder='est_diameter_min' type="text" id="one" className="form-control" {...register("one",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='one'>est_diameter_min</label>
                    <input placeholder='est_diameter_min' type="text" id="one" className="form-control" {...register("one",{required: true} )} />
                </div>
            </form>
        </div>
    )
}

export default Form
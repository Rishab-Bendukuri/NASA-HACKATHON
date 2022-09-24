import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./form.css"

function Form() {
    const {register,handleSubmit,formState:{errors}}=useForm()

    function submit(e){
        fetch(`http://127.0.0.1:5000/find?one=${e.one}&two=${e.two}&three=${e.three}&four=${e.four}&five=${e.five}`)
        .then(response => response.json())
        .then(data => {
            if(data.data==1){
                alert("YES")
            }
            else{
                alert("NO")
            }
        })
    }

    return (
        <div>
            <form className='p-4 d-block mx-auto' onSubmit={handleSubmit(submit)}>
                <h1 className='text-center'>Predict !</h1>
                <div>
                    <label htmlFor='one'>est_diameter_min</label>
                    <input type="text" id="one" className="form-control" {...register("one",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='two'>est_diameter_max</label>
                    <input type="text" id="two" className="form-control" {...register("two",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='three'>relative_velocity</label>
                    <input type="text" id="three" className="form-control" {...register("three",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='four'>miss_distance</label>
                    <input type="text" id="four" className="form-control" {...register("four",{required: true} )} />
                </div>

                <div>
                    <label htmlFor='five'>absolute_magnitude</label>
                    <input type="text" id="five" className="form-control" {...register("five",{required: true} )} />
                </div>

                <button className='btn btn-primary d-block mx-auto text-dark' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
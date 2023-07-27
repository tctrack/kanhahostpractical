import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEvent } from '../actions'; 


const EventForm = () => {

    const { register, handleSubmit, reset, formState: { errors }} = useForm();

    const dispatch = useDispatch();
    
    const formSubmit = (data) => {
        console.log(data);
        dispatch(addEvent(data));
        reset();
    };

  return (
    <>  
        
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Event Form</h2>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className="form-group mb-5">
                            <input type="text" name="eventName"  placeholder='Event name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            {...register("eventName", { required: "This feild is required" })}
                            />
                            {errors.eventName && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.eventName?.message}</p>}
                        </div>
                        <div className="form-group mb-5">
                            <select className="w-full rounded border border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base px-2"
                                {...register("eventType", { required: "This feild is required" })}
                            >
                                <option value=''>Event Type</option>
                                <option value='Sports'>Sports</option>
                                <option value='Music'>Music</option>
                                <option value='General'>General</option>
                                <option value='Children'>Children</option>
                                <option value='School'>School</option>
                            </select>
                            {errors.eventType && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.eventType?.message}</p>}
                        </div>
                        <div className="form-group mb-5 flex gap-3">
                            <div className='w-1/2'>
                                <label className="leading-7 text-sm text-gray-600">Start date</label>
                                <input type="date" name="startDate"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                {...register("startDate", { required: "This feild is required" })}
                                />
                                {errors.startDate && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.startDate?.message}</p>}
                            </div>
                            <div className='w-1/2'>
                                <label className="leading-7 text-sm text-gray-600">End date</label>
                                <input type="date" name="endDate" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                {...register("endDate", { required: "This feild is required" })}
                                />
                                {errors.endDate && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.endDate?.message}</p>}
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <textarea className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Event description' name="description"
                            {...register("description", { required: "This feild is required" })}
                            ></textarea>
                            {errors.description && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.description?.message}</p>}
                        </div>
                        <div className="form-group mb-5">
                            <input type="text" name="eventHandle" placeholder='Event handle by' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            {...register("eventHandle", { required: "This feild is required" })}
                            />
                            {errors.eventHandle && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.eventHandle?.message}</p>}
                        </div>
                        <div className="form-group mb-5">
                            <input type="text" name="eventOrg" placeholder='Event Organisation' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            {...register("eventOrg", { required: "This feild is required" })}
                            />
                            {errors.eventOrg && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.eventOrg?.message}</p>}
                        </div>
                        <div className="form-group mb-5">
                            <input type="number" name="subEventNo" placeholder='Total number of sub events' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            {...register("subEventNo", { required: "This feild is required" })}
                            />
                            {errors.subEventNo && <p className='text-red-700 text-xs font-semibold mt-1'>{errors.subEventNo?.message}</p>}
                        </div>
                        <div className="form-group mb-5">
                            <button type='submit' className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default EventForm
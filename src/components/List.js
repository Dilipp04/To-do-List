import React, { useState } from 'react'
export default function List(props) {

    return (
        <>
            <div className='container-fluid py-3 px-5'>
                <h2 className='text-start '>Works Listed</h2>
                <ul className="list-group my-3">
                    {props.task}
                </ul>
            </div>
        </>
    )
}

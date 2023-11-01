import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

export const Form = (props) => {
    const [val, setval] = useState('')
    const [list, setlist] = useState([])
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (val != "") {
            setlist([...list, val])
            setval("")
            showAlert("Item added", "success")
        }
    }
    const deleteHandler = (i) => {
        let copytask = [...list]
        copytask.splice(i, 1)
        setlist(copytask)
        showAlert("Deleted", "danger")
    }
    const CompleteHandler = (i) => {
        let copytask = [...list]
        copytask.splice(i, 1)
        setlist(copytask)
        showAlert("Completed", "primary")
    }
    var Task = <h4 className='text-danger'>Not Task Available</h4>

    if (list.length > 0) {
        var Task = list.map((val, i) => {

            return <li key={i} className="d-flex justify-content-between list-group-item">
                <h4>{val}</h4>
                <div>
                    <button onClick={() => { deleteHandler(i) }} className='btn btn-danger mx-2'>Delete</button>
                    <button onClick={() => { CompleteHandler(i) }} className='btn btn-success mx-2'>Complete</button>
                </div>
            </li>
        })
    }

    return (
        <>
            <Alert alert={alert} />
            <div className={`container-fluid  p-5 bg-${props.mode}`}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea value={val} onChange={(e) => { setval(e.target.value) }} className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" className="btn btn-primary my-3">Add items</button>
                </form>
            </div>
            <List task={Task} />

        </>
    );

}


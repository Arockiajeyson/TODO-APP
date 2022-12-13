import React from "react";
import { useState, useReducer } from "react";
// import { ADD, DELETE, EDIT } from "./action";
import { EditAndDe } from "./editAndDelet";
const Input = () => {
    const [state, setState] = useState('')
    const [store, setstore] = useState([])
    const [is, setIs] = useState(true)
    const [edit, setEdit] = useState(null)
    const handler = () => {
        if(!is){
            const newVal = store.map((e)=>{
                if(edit === e.id){
                    e.value =state
                }
                return e
            })
            setstore(newVal)
            setState('')
            setIs(true)
        }else if(state){
            let adding = {
                value: state,
                id: new Date().getTime()
            }
            setstore([...store].concat(adding))
            setState("")
        }
    }
    const Delte=(id)=>{
        const ids=store.filter((e)=>e.id !== id)
        setstore(ids)
    }
    const Edit =(id)=>{
        const idx =store.find(e=>e.id==id)
        setIs(false)
        setState(idx.value)
        setEdit(id)
    }
    return (
        <div className="main-div">
            <input type="text" onChange={(e) => setState(e.target.value)} value={state}/>
            <button onClick={handler}>{is?"ADD":"SAVE"}</button>
            {store.map((e, index) => {
                return (
                    <div key={index}>
                        {e.value}
                        <button onClick={() => Delte(e.id)}>DELETE</button>
                        <button onClick={() => Edit(e.id)}>EDIT</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Input;

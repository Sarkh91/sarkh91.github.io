import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {Fragment} from "react";

const Input:React.FC = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const idInput:MutableRefObject<any> = useRef(null)

    useEffect(() => {
        console.log('mounted')
        if (idInput?.current?.focus) {
            idInput.current.focus()
        }

        return () => {
            console.log('unmounted')
        }
    }, [])

    const onChangeId = (e:any) => {
        setId(e.target.value)
    }

    const onChangePw = (e:any) => {
        setPw(e.target.value)
    }

    const onClickButton = () => {
        console.log({id, pw})
    }

    const onClickRemove = () => {
        setId('')
        setPw('')
    }

    return (
        <Fragment>
            <h1>Input</h1>
            <input ref={idInput} value={id} onChange={onChangeId} placeholder="id" type="text"/>
            <input value={pw} onChange={onChangePw} placeholder="password" type="password"/>

            <button onClick={onClickButton}>PRINT</button>
            <button onClick={onClickRemove}>REMOVE</button>
        </Fragment>

    )
}

export default Input;
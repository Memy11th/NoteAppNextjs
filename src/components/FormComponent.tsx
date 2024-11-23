import React from 'react'

const FormInput = ({name,value,type,placeholder,onChange,onBlur,FormikError}:{FormikError:string,name:string,value:string,type:string,placeholder:string,onChange:void,onBlur:void}) => {
    return <>
        <label htmlFor={name}></label>
        <input className='' type={type}  placeholder={placeholder} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
        <h3>{FormikError}</h3>
    </>
}

export default FormInput

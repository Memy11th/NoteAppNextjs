import React from 'react'

const FormInput = ({name,value,type,placeholder,onChange,onBlur,FormikError,touched}:{FormikError?:string|undefined,touched?:boolean,name:string,value:string,type:string,placeholder:string,onChange:(event: React.ChangeEvent<HTMLInputElement>) => void,onBlur:(event: React.FocusEvent<HTMLInputElement>) => void}) => {
    return <>
        <label htmlFor={name}></label>
        <input className='' type={type}  placeholder={placeholder} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
        <h3>{ FormikError && touched && FormikError}</h3>
    </>
}

export default FormInput

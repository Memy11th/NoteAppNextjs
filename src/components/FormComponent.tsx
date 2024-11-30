import React from 'react'

const FormInput = ({name,value,type,placeholder,onChange,onBlur,FormikError,touched,className}
    :{FormikError?:string|undefined,touched?:boolean,name:string,className?:string,value:string,type:string,placeholder:string,onChange:(event: React.ChangeEvent<HTMLInputElement>) => void,onBlur:(event: React.FocusEvent<HTMLInputElement>) => void}) => {
    return <>
        <label htmlFor={name}>{name}</label>
        <input className={className} type={type}  placeholder={placeholder}  name={name} value={value || ''} onChange={onChange} onBlur={onBlur}/>
        {FormikError && touched && <h3>{FormikError}</h3>}
    </>
}

export default FormInput

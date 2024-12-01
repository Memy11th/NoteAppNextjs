import { DeleteFn, UpdateFn } from '@/Api/Api';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import Button from './Button';
import { useFormik } from 'formik';
import { Box, Modal } from '@mui/material';
import FormInput from './FormComponent';

const token  = localStorage.getItem('token') || '';
interface EditedNote {
    content:string,
    title:string
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  
  const label= [
    {
      name:'title',
      placeholder:'Title',
      type:'text'
    },
    {
      name:'content',
      placeholder:'Content',
      type:'text'
    }
  ]

const EditSection = ({id,title,content}:{id:string,title:string,content:string}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleUpdate = async (data:EditedNote)=>{
        const res = await UpdateFn(id,token,data);
        formik.resetForm();
        handleClose();  
        window.location.reload();
        console.log(res);
    }

    const formik = useFormik({
        initialValues:{
          title,
          content,
        },
        onSubmit:handleUpdate
      
      })


    const handleDelete = async ()=>{
        const res = await DeleteFn(id,token);
        console.log(res)
    };

   
    return <>
            <div className='flex gap-3  items-center absolute bottom-1 right-2 '>
                

                <Button  Fn={handleOpen} component={<FiEdit className='text-lg text-yellow-500 cursor-pointer' />} />
                <Button  Fn={handleDelete} component={<MdDeleteSweep className='text-lg text-red-600 cursor-pointer' />} />

            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit} >
              {label.map((item , index)=>(<FormInput key={index} {...item}
              value={formik.values[item.name as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              FormikError={formik.errors[item.name as keyof typeof formik.errors] as string | undefined}
              touched={formik.touched[item.name as keyof typeof formik.touched]}
              className='outline-none border p-2 rounded-md'
              />))}  

              <button type='submit'  className='p-2 bg-yellow-500 text-white rounded-md'>
                Update note
              </button>                
            </form>
        </Box>
      </Modal>
    </>
}

export default EditSection;

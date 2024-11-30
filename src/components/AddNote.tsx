'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import FormInput from './FormComponent';

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

export default function ActionButton() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (formikValues)=>{
      
  }

  const formik = useFormik({
    initialValues:{
      title:'',
      content:''
    },
    onSubmit: handleSubmit
  })


  return <React.Fragment>
              <Box onClick={handleOpen} sx={{ position:'fixed' , bottom:'20px' , right:'10px' , zIndex:100  }}>
                  <Fab size="medium" color={'secondary'}  aria-label="add">
                      <AddIcon />
                  </Fab>
              </Box>
              <div>
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

              <button type='submit' className='p-2 bg-green-700 text-white rounded-md'>
                Add note
              </button>                
            </form>
        </Box>
      </Modal>
    </div>
          </React.Fragment>
  
  };
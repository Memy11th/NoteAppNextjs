import { LoginForm } from "@/app/auth/login/page";
import { SignUpForm } from "@/interfaces/SignupForm";

// const Fetchfn = (URL : string,cacheType?:string,cacheTime?:number)=> fetch(URL,{cache: cacheType  ,next:{revalidate:cacheTime}  });


// signup function 
export const handleSignup = async(formikValues:SignUpForm)=>{
  const res = await fetch('https://note-sigma-black.vercel.app/api/v1/users/signUp',{
    method:'POST',
    body:JSON.stringify(formikValues),
    headers:{
      'Content-Type': 'application/json'
    }
  });
    const data = await res.json();
    return data
}

//login function 
export const handleLogin = async(formikValues:LoginForm)=>{
  const res = await fetch('https://note-sigma-black.vercel.app/api/v1/users/signIn',{
    method:'POST',
    body:JSON.stringify(formikValues),
    headers:{
      'Content-Type': 'application/json'
    }
  });
    const data = await res.json();
    return data
};


// function to get all notes for all users 
export const getallNotes = async(token:string)=>{
  const res = await fetch('https://note-sigma-black.vercel.app/api/v1/notes/allNotes',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      token: `3b8ny__${token}`
    }
  });
    const data = await res.json();
    return data
}

// a function to get the user's notes

export const myNotes = async (token:string)=>{
    const res = await fetch(`https://note-sigma-black.vercel.app/api/v1/notes`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        token: `3b8ny__${token}`
      }
    });
    const data = await res.json();
    return data;
  
  }


export const DeleteFn = async (id:string,token:string)=>{
    const res = await fetch(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        token: `3b8ny__${token}`
      }
    });
    const data = await res.json();
    return data;
  };

export const UpdateFn = async (id:string,token:string,data:any)=>{
    const res = await fetch(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        token: `3b8ny__${token}`
      }
    });
    const resData = await res.json();
    return resData;
  };


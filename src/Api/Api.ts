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



import { SignUpForm } from "@/interfaces/SignupForm";

const Fetchfn = (URL : string,cacheType?:string,cacheTime?:number)=> fetch(URL,{cache: cacheType  ,next:{revalidate:cacheTime}  });


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


// A functions to call Apis 

import { SignUpForm } from "@/interfaces/SignupForm";

const Fetchfn = (URL : string,cacheType?:string,cacheTime?:number)=> fetch(URL,{cache: cacheType  ,next:{revalidate:cacheTime}  });

export const signup = async (formikValues: SignUpForm) => {
    try {
            const response = await fetch('https://note-sigma-black.vercel.app/api/v1/users/signUp', {
            method: 'POST',  // Specify the method
            body: JSON.stringify(formikValues), // Stringify the form data
        });

      // Check if the response is successful
    if (!response.ok) {
        throw new Error('Failed to sign up');
    }

      const data = await response.json(); // Parse the response data
      return data; // Return the parsed data (e.g., user info, token, etc.)
    } catch (error) {
    console.error('Error during signup:', error);
      throw error; // Rethrow the error or handle it as needed
    }
    };

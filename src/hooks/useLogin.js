import React from "react";
import {useQuery, QueryClient} from "react-query";
import axios from 'axios'



export async function Login () {
  return await axios.post('https://apify.epayco.co/login/mail',{},{
      auth:{
        username:'pruebafront@payco.co',
        password:'pruebafront$2020',
      }
  }).then(data=>{
      return data
  })
  .catch(err=>console.error(err))
}


export default function useLogin () {
  const {data, isLoading} = useQuery("Login", Login, {
    staleTime: 100000,
  });

  return [ data, isLoading ];
}

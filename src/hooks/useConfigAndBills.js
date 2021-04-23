import React from "react";
import {useQuery, QueryClient} from "react-query";
import axios from 'axios'



export async function ConfigAndBills (dataToken,documentId) {

    const token = dataToken
    const config = { headers: { 'Authorization': `Bearer ${token}` }  };
    const bodyParameters = {  projectId: 29   };
    const urlConfig = 'https://apify.epayco.co//billcollect/proyect/config/consult'

  return await axios.post(urlConfig,bodyParameters,config)

  .then(responseConfig=>{  

    const urlBills = 'https://apify.epayco.co/billcollect/invoices/consult'
    const config = {   headers: { 'Authorization': `Bearer ${token}` } };
    const bodyParameters = {  projectId: 29  , document: documentId };

    return axios.post(urlBills, bodyParameters,config)
        .then(responseBills=>{
          return {
            config: responseConfig,
            bills: responseBills
          }
        })
  })
  .catch(err=>console.error(err))
  
  
}


export default function useConfigAndBills (token,documentId) {
  const {data, isLoading, refetch} = useQuery(["ConfigAndBills",token,documentId], ()=>ConfigAndBills(token,documentId), {
    staleTime: 100000,
    enabled: false
  });

  return [ data, isLoading,refetch ];
}

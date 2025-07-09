import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function Brands() {

   let {data,error,isLoading,isError,isFetching} = useQuery({queryKey:['recenrProduct'],
    queryFn:getProducts,
    refetchInterval:20000,
    // refetchIntervalInBackground:true
    staleTime:4000,
    select:((data)=>{
      return data?.data
    })
})

function getProducts() {
      return axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        
        return data
        // then في ال setLoaddingحطيت ال  
        // setProduct(data.data);
      })
      .catch(() => {
        // setLoadding(false);
        
      });
  }

  return <div>
    Brands
  </div>;
}

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) =>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);  


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      
        headers: {
          'X-RapidAPI-Key': 'c3d217e379msh83a796fb2a4c842p15dce5jsn5aa5145d1818',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

      const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
    
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
      return { data, isLoading, error, refetch };
    };
    
    export default useFetch;
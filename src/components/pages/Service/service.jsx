import { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";
import Services from "./services";


const Service = () =>{
  const api = useApi();

  const [services,setServices]=useState([]);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () =>{
      const servicePageInformation = await api.servicePageInformation();
      if(servicePageInformation){
          await setServices(servicePageInformation.ourservices);
      } else {
        console.log(servicePageInformation,"1111")
      }
    }

    return (
  <main>
  {/* Service Section Start */}
    <Services services={services}/>
  {/* Service Section End */}
 </main>

    )
}

export default Service;
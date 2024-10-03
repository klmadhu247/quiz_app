import React, { useState } from "react";

const HOC_Function=  OrginalComponent =>
    {
        function NewComponent (props)
        {
            const [co,setCo] = useState(0);
            const inc =()=>
            {
                setCo(co+1)
            }

           return  <OrginalComponent c={co} i={inc} {...props}/>
            
        }

        return NewComponent





    }
        
    export default HOC_Function;
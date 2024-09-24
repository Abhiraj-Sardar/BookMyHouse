import React,{useEffect, useState} from 'react'
import Data from "../../Utils/Data";
import Navbar from '../../Components/Navbar';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import "./Css/Rent.css"
export const Rent = () => {


    const [value1, setValue1] = useState([20, 37]);
    const [bhk,setBhk]=useState([{BHK:2,status:1},{BHK:3,status:1},{BHK:4,status:1},{BHK:6,status:1},{BHK:8,status:1}])
    

    const minDistance = 90000;

    const result={};

    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
          setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
      };
    
      const handleChip=(obj,idx)=>{
        bhk[idx]["status"]=0;
        setBhk([...bhk]);     
      }

    return (
        <div className="container-fluid rent-page">
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-3 filters">
                        <br />
                        <h5>Can't Find Your Dream House<br /><h2>Apply Filters</h2></h5>
                        <br />

                        <h5>Budget</h5>
                        <div>
                            <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={value1}
                            onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={10000}
                            max={1500000}
                            disableSwap
                            sx={{color:"var(--secondary-color)"}}
                        />
                        </div>

                        <h5>No of Bedrooms</h5>
                        <div style={{display:"flex",flexWrap:"wrap",gap:"2px"}}>
                            {
                                bhk.map((b,i)=>{
                                    return(
                                        (b["status"]===1)
                                        ?
                                        (<Chip key={i} 
                                            label={`${b["BHK"]}BHK`} 
                                            clickable={true} 
                                            variant="outlined" 
                                            onClick={()=>{handleChip(b,i)}} 
                                            />)
                                        :
                                        (<Chip label="Deletable" onDelete={()=>{}}/>)
                                        
                                    )
                                })
                            }
                        </div>
                        <br />
                        <h5>Amenities</h5>
                        <div style={{display:"flex",flexWrap:"wrap",gap:"2px"}}>
                            
                        </div>
                        <br />

                        <h5>Location</h5>
                        <div style={{display:"flex",flexWrap:"wrap",gap:"2px"}}>
                           
                        </div>

                    </div>
                    <div className="col-9 property-data">

                    </div>
                </div>
            </div>
        </div>
    )
}

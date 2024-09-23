import React from 'react'
import "./Css/Home.css"
import Navbar from '../../Components/Navbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const Home = () => {
    return (
        <div>
            <div className="home-page-1">
                <Navbar />
                <div className="container theme-1">
                    <div className="row">
                        <div className="col-md-6" style={{ backgroundColor: "#fff" }}>
                            <h1 style={{ margin: "1rem", fontSize: "68px" }}>Curating the best <br />property that you <br />truly deserve</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam voluptate doloribus architecto eligendi hic odit consequatur laborum at repellendus, veritatis aliquid, nisi iure inventore nemo expedita quae accusamus, sequi quos esse minima. Adipisci, molestias?</p>
                            <h3>
                                <TextField id="outlined-basic" label="City, Address, Neighbour" variant="outlined" />
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor:"var(--secondary-color)",ml:1,padding:"0.9rem" }}
                                    
                                >Book A Call</Button>
                            </h3>
                        </div>
                        <div className="col-md-6">
                            <h1 style={{ margin: "1rem", fontSize: "68px" }}>Curating the best <br />property that you <br />truly deserve</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-2">

            </div>
        </div>
    )
}

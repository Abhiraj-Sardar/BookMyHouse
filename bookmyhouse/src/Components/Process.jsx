import React, { useContext, useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./Css/Process.css";
import { Cart } from '../CartContext';
import PaymentPortal  from './PaymentPortal';


const steps = ['View Cart', 'Provide Contact Information', 'Make Payment'];

export const Process = () => {

    const cart = useContext(Cart);
    // console.log(cart);
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [disable, setDisable] = useState(false);

    

    const handleProcessEnd = () => {
        setDisable(true);
    }

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }

    const prevStep = () => {
        setActiveStep(activeStep - 1);
    }

    return (
        <>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {

                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div className="container process-btn-container" style={(activeStep === 0 || activeStep === steps.length) ? { justifyContent: "end" } : { justifyContent: "space-between" }}>
                {
                    (activeStep === steps.length)
                        ?
                        (<Button
                            variant="contained"
                            onClick={handleProcessEnd}
                            disabled={disable}
                            sx={{ backgroundColor: "var(--secondary-color)" }}
                        >Finish</Button>)
                        :
                        (activeStep === 0) ? (<Button
                            variant="contained"
                            onClick={nextStep}
                            sx={{ backgroundColor: "var(--secondary-color)" }}
                        >Next</Button>) : (
                            <>
                                <Button
                                    variant="contained"
                                    onClick={prevStep}
                                    sx={{ backgroundColor: "var(--secondary-color)" }}
                                >Back</Button>
                                <Button
                                    variant="contained"
                                    onClick={nextStep}
                                    sx={{ backgroundColor: "var(--secondary-color)" }}
                                >Next</Button></>)

                }
            </div>

            <div className="cart-data-display container">
                {
                    (activeStep === 0)
                        ?
                        (
                        <>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Property ID</TableCell>
                                        <TableCell>Property Name</TableCell>
                                        <TableCell>Agent</TableCell>
                                        <TableCell>BHK</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Area (sqft)</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.cart.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>{row.agent}</TableCell>
                                            <TableCell>{row.bedroom}</TableCell>
                                            <TableCell>{row.location}</TableCell>
                                            <TableCell>{row.area} sqft</TableCell>
                                            <TableCell>{row.price}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    onClick={()=>{cart.removeCartItem(row)}}
                                                    sx={{ backgroundColor: "red" }}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        
                                    ))}
                                </TableBody>
                            </Table>
                            
                        </TableContainer>
                                    <div className="tot">
                                        Grand Total :{cart.grandTotal}
                                    </div>
                        </>
                        
                        
                        )
                        :
                        (activeStep===1)?(<p></p>):(<PaymentPortal/>)
                
                    }
            </div>
        </>

    )
}

import React, {useState } from 'react'
import Data from "../../Utils/Data";
import Navbar from '../../Components/Navbar';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Card from '../../Components/Card';
import { useContext } from 'react';
import { Cart } from '../../CartContext';
import "./Css/Rent.css"

export const Rent = () => {

    const cart = useContext(Cart);
    // console.log(cart);
    const [data, setData] = useState(Data);
    const [result, setResult] = useState(Data);

    const [value1, setValue1] = useState([100000, 350000]);
    const [bhk, setBhk] = useState([{ BHK: 2, status: 0 }, { BHK: 3, status: 0 }, { BHK: 4, status: 0 }, { BHK: 6, status: 0 }, { BHK: 8, status: 0 }])
    const [amn, setAmn] = useState([{ type: "Parking", status: 0 }, { type: "Gymnasium", status: 0 }, { type: "Park", status: 0 }, { type: "Lift", status: 0 }, { type: "Swimming Pool", status: 0 }, { type: "Club", status: 0 }, { type: "Wifi", status: 0 }, { type: "Security", status: 0 }]);
    const [locations, setLocations] = useState([{ loc: "Kolkata", status: 0 }, { loc: "Bengaluru", status: 0 }, { loc: "Chennai", status: 0 }, { loc: "New Delhi", status: 0 }, { loc: "Puducherry", status: 0 }, { loc: "Kollam", status: 0 }, { loc: "Ludhiana", status: 0 }, { loc: "Jalandhar", status: 0 }])
    const [sqftValue, setSqftValue] = useState([0, 1000]);

    const minDistance = 90000;
    const minSqftDistance = 1000;
    const [filters, setFilters] = useState({
        budget: [...value1],
        bhk: [undefined],
        amn: [undefined],
        loc: [undefined],
        sqft: [...sqftValue]
    });

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

        filters["budget"] = [...value1];
        setFilters({ ...filters });
        // console.log(filters);
    };

    const handleChip = (obj, idx) => {
        bhk[idx]["status"] = 1;
        setBhk([...bhk]);
        var b = []
        bhk.filter((obj) => {
            if (obj.status == 1) {
                b.push(obj.BHK);
                return true
            }
        });

        filters["bhk"] = [...b];

        setFilters({ ...filters })

        console.log(filters)

    }

    const deleteChip = (obj, idx) => {
        bhk[idx]["status"] = 0;
        setBhk([...bhk]);

        filters["bhk"] = bhk.filter((obj) => {
            if (obj.status == 1) {
                return true
            }
        });
        setFilters({ ...filters })
        // console.log(filters);

    }

    const handleAmenities = (obj, idx) => {
        amn[idx]["status"] = 1;
        setAmn([...amn]);
        var a = [];
        amn.filter((obj) => {
            if (obj.status == 1) {
                a.push(obj.type);
                return true
            }
        });
        filters["amn"] = [...a];
        setFilters({ ...filters });
        // console.log(filters)

    }

    const deleteAmenities = (obj, idx) => {
        amn[idx]["status"] = 0;
        setAmn([...amn]);
        filters["amn"] = amn.filter((obj) => {
            if (obj.status == 1) {
                return true
            }
        });
        setFilters({ ...filters })
        // console.log(filters)
    }

    function valuetext2(value) {
        return `${value}°C`;
    }

    const handleSqft = (event, newValue, activeThumb) => {

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSqftValue([Math.min(newValue[0], sqftValue[1] - minSqftDistance), sqftValue[1]]);
        } else {
            setSqftValue([sqftValue[0], Math.max(newValue[1], sqftValue[0] + minSqftDistance)]);
        }
        filters["sqft"] = [...sqftValue];
        setFilters({ ...filters });
        // console.log(filters);
    }

    const handleLocation = (obj, idx) => {

        if (locations[idx]["status"] == 0) {
            locations[idx]["status"] = 1;
        } else {
            locations[idx]["status"] = 0;
        }

        setLocations([...locations]);
        var l = [];

        locations.filter((obj) => {
            if (obj.status == 1) {
                l.push(obj.loc);
                return true
            }
        });

        filters["loc"] = [...l];
        setFilters({ ...filters })
        // console.log(filters);
    }


    // 
    const handleSubmit = () => {

        setResult([...Data]);
        console.log(result);

        const demo = Data.filter((obj) => {

            const budget = ((obj.price >= filters["budget"][0]) && (obj.price <= filters["budget"][1]))
            const bedroom = !filters["bhk"][0] || filters["bhk"].includes(obj.bhk)
            const amenities = !filters["amn"][0] || filters["amn"].includes(obj.amenity[0])
            const address = !filters["loc"][0] || filters["loc"].includes(obj.location)
            const squareFeet = ((obj.area >= filters["sqft"][0]) && (obj.area <= filters["sqft"][1]))
            return (budget && bedroom && amenities && address && squareFeet)

        })


        setResult(demo);

    }


    return (
        <div className="container-fluid rent-page">
            <Navbar />
            <div className="container">
                <Badge badgeContent={(cart.cart).length}
                    className='cart'
                    color="primary">
                    <NavLink exact to="/cart" activeClassName="active-link">
                        <ShoppingCartIcon color="action" />
                    </NavLink>
                </Badge>
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
                                sx={{ color: "var(--secondary-color)" }}
                            />
                        </div>

                        <h5>No of Bedrooms</h5>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                            {
                                bhk.map((b, i) => {
                                    return (
                                        (b["status"] === 0)
                                            ?
                                            (<Chip key={i}
                                                label={`${b["BHK"]}BHK`}
                                                clickable={true}
                                                variant="outlined"
                                                sx={{ borderColor: "var(--secondary-color)" }}
                                                onClick={() => { handleChip(b, i) }}
                                            />)
                                            :
                                            (<Chip label={`${b["BHK"]}BHK`}
                                                sx={{ backgroundColor: "var(--secondary-color)", color: "var(--primary-color)" }}
                                                onDelete={() => { deleteChip(b, i) }} />)

                                    )
                                })
                            }
                        </div>
                        <br />
                        <h5>Amenities</h5>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                            {
                                amn.map((amenity, i) => {
                                    return (
                                        (amenity["status"] === 0)
                                            ?
                                            (<Chip key={i}
                                                label={`+ ${amenity["type"]}`}
                                                clickable={true}
                                                variant="outlined"
                                                sx={{ borderColor: "var(--secondary-color)" }}
                                                onClick={() => { handleAmenities(amenity, i) }}
                                            />)
                                            :
                                            (<Chip label={`${amenity["type"]}`}
                                                sx={{ backgroundColor: "var(--secondary-color)", color: "var(--primary-color)" }}
                                                onDelete={() => { deleteAmenities(amenity, i) }} />)

                                    )
                                })
                            }
                        </div>
                        <br />

                        <h5>Location</h5>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>

                            {
                                locations.map((location, i) => {
                                    return (
                                        <FormControlLabel
                                            key={i}
                                            control={<Checkbox sx={{
                                                color: "var(--secondary-color)",
                                                '&.Mui-checked': {
                                                    color: "var(--secondary-color)",
                                                },
                                            }} />}
                                            value={location["status"]}
                                            label={`${location["loc"]}`}
                                            onClick={() => { handleLocation(location, i) }}
                                        />
                                    )
                                })
                            }



                        </div>
                        <br />
                        <h5>Area in Sqft</h5>

                        <div>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={sqftValue}
                                onChange={handleSqft}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext2}
                                min={0}
                                max={4000}
                                disableSwap
                                sx={{ color: "var(--secondary-color)" }}
                            />
                        </div>

                        <h1 style={{ textAlign: "center" }}>
                            <Button variant="contained"
                                startIcon={<FilterListIcon />}
                                sx={{ backgroundColor: "var(--secondary-color)" }}
                                onClick={handleSubmit}
                            >
                                Apply Filter
                            </Button>
                        </h1>

                    </div>
                    <div className="col-9 property-data-container">
                        <h4 style={{ marginTop: "1rem" }}>
                            {result.length} Property Found
                        </h4>
                        <div className="property-data">
                            {
                                (result.length > 0) ? (
                                    result.map((data, i) => {
                                        return (

                                            <Card
                                                key={i}
                                                id={data.id}
                                                img={data.img}
                                                title={data.title}
                                                desc={data.desc}
                                                agent={data.agent}
                                                bedrooms={data.bedrooms}
                                                price={data.price}
                                                amenity={data.amenity}
                                                bhk={data.bhk}
                                                location={data.location}
                                                area={data.area}
                                                date={data.date}
                                            />
                                        )
                                    })
                                ) : (<p>No Properties to Display</p>)
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

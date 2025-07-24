import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from "./Filters.module.css";
import CustomButton from '../../custom/CustomButton.js'

export default function RangeFilter({ title, range, filterKeys, setFilterParams, filterParams }) {
    const [selectedMinValue, setSelectedMinValue] = useState(0);
    const [selectedMaxValue, setSelectedMaxValue] = useState(0);

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(range?.max);

    useEffect(() => {
        if (range && range.min && range.max) {
            setMinValue(range.min);
            setMaxValue(range.max);
            if (filterParams[filterKeys[0]] && filterParams[filterKeys[1]]) {
                setSelectedMinValue(filterParams[filterKeys[0]]);
                setSelectedMaxValue(filterParams[filterKeys[1]]);
            } else {
                setSelectedMinValue(range.min);
                setSelectedMaxValue(range.max);
            }
        }
    }, [range]);

    const handleMinChange = (e) => {
        setSelectedMinValue(e.target.value);
    };

    const handleMaxChange = (e) => {
        setSelectedMaxValue(e.target.value);
    };

    const handleApplyFilter = () => {
        setFilterParams(prevParams => {
            return { ...prevParams, [filterKeys[0]]: selectedMinValue, [filterKeys[1]]: selectedMaxValue };
        })
    };

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setSelectedMinValue(newValue[0]);
        setSelectedMaxValue(newValue[1]);
    };

    return (
        <div className={styles.plp_filte_range}>
            <p className={styles.plp_filte_name}>{title}</p>
            <Box sx={{ width: '80%' }}>
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }} className={styles.filter_element_text}>
                    <input style={{ width: '50px' }} type="number" value={selectedMinValue} onChange={handleMinChange} />
                    <div>-</div>
                    <input style={{ width: '50px' }} type="number" value={selectedMaxValue} onChange={handleMaxChange} />
                </div>
                <Slider
                    value={[selectedMinValue, selectedMaxValue]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={minValue}
                    max={maxValue}
                    sx={{ '& .MuiSlider-thumb': { border: "2px solid black;", backgroundColor: "white" },
                        '& .MuiSlider-track': { color: "black !important" } }}
                />
                <CustomButton onClick={handleApplyFilter} isPrimary={true}>Apply</CustomButton>
            </Box>
        </div>
    );
};

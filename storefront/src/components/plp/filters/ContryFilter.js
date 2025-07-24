import { useEffect, useState } from "react";
import styles from "./Filters.module.css";

export default function ContryFilter({ filter, setFilterParams, filterParams }) {
    const [selectedCountries, setSelectedCountries] = useState([]);

    useEffect(() => {
        console.log("selectedCountries" + JSON.stringify(selectedCountries))
        if (!filterParams.country || filterParams.country.length !== selectedCountries.length) {
            setFilterParams(prevParams => {
                if (!selectedCountries.length) {
                    delete prevParams.country;
                    return { ...prevParams };
                }
                return { ...prevParams, country: selectedCountries };
            });
        }
    }, [selectedCountries]);

    useEffect(() => {
        if (filterParams.country && filterParams.country.length !== selectedCountries.length) {
            setSelectedCountries(filterParams.country);
        } else if (!filterParams.country && selectedCountries.length !== 0) {
            setSelectedCountries([]);
        }
    }, [filterParams]);

    const handleCheckboxChange = (country) => {
        setSelectedCountries((prev) =>
            prev.includes(country) ? prev.filter((b) => b !== country) : [...prev, country]
        );
    };

    return <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Country</p>
        {filter.countries?.map((country) => (
            <label key={country}>
                <input
                    type="checkbox"
                    value={country}
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCheckboxChange(country)}
                />
                {country}
            </label>
        ))}
    </div>
}

import React from 'react';
import CheckBoxFilter from "./CheckBoxFilter";
import RangeFilter from "./RangeFilter";
import styles from "./Filters.module.css";


export default function PlpFilter({ filters, setFilterParams, filterParams }) {
    return (
        <div className={styles.filter_container}>
            <CheckBoxFilter title={"Brands"} filterKey={"brand"} items={filters.brands}
                setFilterParams={setFilterParams} filterParams={filterParams} />
            <CheckBoxFilter title={"Countries"} filterKey={"country"} items={filters.countries}
                setFilterParams={setFilterParams} filterParams={filterParams} />
            <RangeFilter title={"Price"} filterKeys={["minPrice", "maxPrice"]} range={filters.priceRange}
                setFilterParams={setFilterParams} filterParams={filterParams} />
        </div>
    );
} 
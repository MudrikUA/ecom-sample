import ProductTile from "./ProductTile"
import styles from "./ProductGrid.module.css"
import Pagination from '@mui/material/Pagination';

export default function ProductGrid({ products, paginationData, currentPage, setCurrentPage }) {

    const handleChange = (event, value) => {
        console.log('setCurrentPage')
        setCurrentPage(value);
    };

    return <div className={styles.productGridContant}>
        <div className={styles.productGrid}>
            {products.map((product, index) => {
                return <ProductTile key={index} product={product} isShowActionBtns={true} />
            })}
        </div>
        <Pagination count={paginationData.totalPages} page={currentPage} onChange={handleChange} />
    </div>
}


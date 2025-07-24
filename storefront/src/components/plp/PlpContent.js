import styles from "./PlpContent.module.css";
import ProductGrid from "../product/ProductGrid"
import ContentLayout from '../layout/ContentLayout.js'
import PlpFilter from "./filters/PlpFilter.js";
import MyBreadcrumbs from "../breadcrumbs/MyBreadcrumbs.js";

export default function PlpContent({ products, filters, setFilterParams, filterParams, paginationData, currentPage, setCurrentPage }) {
    return <ContentLayout>
        <MyBreadcrumbs></MyBreadcrumbs>
        <div className={styles.plp_content}>
            <div className={styles.plp_ref}>
                <PlpFilter filters={filters}
                    setFilterParams={setFilterParams}
                    filterParams={filterParams} />
            </div>
            <div>
                <ProductGrid products={products}
                    paginationData={paginationData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}></ProductGrid>
            </div>
        </div>
    </ContentLayout>
}
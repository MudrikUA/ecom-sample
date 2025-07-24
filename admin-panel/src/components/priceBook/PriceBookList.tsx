import React from 'react';
import { Datagrid, FunctionField, List, NumberField, ReferenceField, TextField } from 'react-admin';

const currencyMap = {
    hrn: "(HRN) Hryvni",
    usd: "(USD) US Dollars",
    eur: "(EUR) Euros"
};

 const PriceBookShow = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="product_id" reference="product" />
            <NumberField source="price" />
            <FunctionField source="currency" render={record => currencyMap[record.currency] || record.currency} />
        </Datagrid>
    </List>
);

export default PriceBookShow

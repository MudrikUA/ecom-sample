import React from 'react';
import { Datagrid, DateField, List, ReferenceField, TextField, TextInput } from 'react-admin';

const StockList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="product_id" reference="product" />
            <TextField source="quantity" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default StockList
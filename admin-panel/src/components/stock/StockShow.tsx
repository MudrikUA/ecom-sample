import React from 'react';
import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const StockShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="product_id" reference="product" />
            <TextField source="quantity" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);

export default StockShow
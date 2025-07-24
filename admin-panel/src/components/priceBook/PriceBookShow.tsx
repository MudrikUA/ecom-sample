import React from 'react';
import { NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const PriceBookList = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="product_id" reference="product" />
            <NumberField source="price" />
            <TextField source="currency" />
        </SimpleShowLayout>
    </Show>
);

export default PriceBookList;
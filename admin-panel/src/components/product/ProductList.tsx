
import React from 'react';
import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

const imgLink = 'http://localhost:5000/static/';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="descriptionLong" />
            <TextField source="descriptionShort" />
            <ReferenceField source="brand_id" reference="brand" />
            <TextField source="type" />
            <TextField source="size" />
            <TextField source="sku" />
            <ReferenceField source="category_id" reference="category" />
            <BooleanField source="is_active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);
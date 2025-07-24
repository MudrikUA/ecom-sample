import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const BrandList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="country" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
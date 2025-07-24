import React from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';

export const RoleList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);
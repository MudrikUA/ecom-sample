import React from 'react';
import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" />
            <NumberField source="total_price" />
            <TextField source="currency" />
            <TextField source="status" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default OrderList;
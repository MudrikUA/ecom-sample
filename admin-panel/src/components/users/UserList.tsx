import React from "react";
import { List, Datagrid, TextField, ReferenceField, SelectField, ArrayField, ChipField, DateField, EmailField, SingleFieldList } from "react-admin";

const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="phone" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <ArrayField source="roles">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);

export default UserList;
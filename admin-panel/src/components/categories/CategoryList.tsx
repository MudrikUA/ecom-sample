import React from "react";
import { List, Datagrid, TextField, ReferenceField, SelectField } from "react-admin";

const CategoryList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="alias" />
            <TextField source="type" />
            <TextField source="isActive" />
            <ReferenceField source="parent_id" reference="category">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export default CategoryList;
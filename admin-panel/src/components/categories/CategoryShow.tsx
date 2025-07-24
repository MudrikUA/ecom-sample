import React from "react";
import { Show, SimpleShowLayout, TextField, ReferenceField, SelectField, BooleanField } from "react-admin";

const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="alias" />
            <TextField source="type" />
            <BooleanField source="isActive" />
            <ReferenceField source="parent_id" reference="category">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export default CategoryShow;
import React from 'react';
import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const RoleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);
import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const BrandShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="country" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);
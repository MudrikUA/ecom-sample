import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const BrandEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="country" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
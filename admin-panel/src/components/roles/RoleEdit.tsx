import React from 'react';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const RoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
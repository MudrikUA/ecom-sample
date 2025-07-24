import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="phone" />
            <ReferenceArrayInput source="roles" reference="role">
                <AutocompleteArrayInput optionText="name" source='role' />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
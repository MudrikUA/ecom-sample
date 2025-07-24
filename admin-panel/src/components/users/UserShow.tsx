import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    DateField,
    ArrayField,
    Datagrid,
    ReferenceArrayField,
    WithListContext,
} from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="phone" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <ReferenceArrayField source="roles" reference='role'>
                <WithListContext render={({ data }) => (
                    <ul>
                        {data && data.map((role, index) => (
                            <li key={role.id}>{role.name}</li>
                        ))}
                    </ul>
                )} />
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show >
);

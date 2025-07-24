import React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, ReferenceField, BooleanInput } from "react-admin";

const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="Category Name" />  {/* Назва категорії */}
            <TextInput source="alias" label="Category Alias" />  {/* Назва категорії */}
            <SelectInput source="type" choices={[
                { id: 'Product', name: 'Product' },
                { id: 'Tour', name: 'Tour' },
                { id: 'Service', name: 'Service' },
            ]} label="Test Options" />
            <BooleanInput source="isActive" label="isActive"/>  {/* Опис */}

            {/* Вибір батьківської категорії */}
            <ReferenceInput source="parent_id" reference="category">
                <SelectInput source="parent_id" optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;
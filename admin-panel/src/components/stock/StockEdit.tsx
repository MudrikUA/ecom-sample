import React from 'react';
import { AutocompleteInput, DateInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

const StockEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="product" label="Product">
                <SelectInput optionText={(record) => `${record.id} - ${record.title}`} />
            </ReferenceInput>
            <TextInput source="quantity" />
        </SimpleForm>
    </Edit>
);

export default StockEdit
import React from 'react';
import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const PriceBookEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="product" />
            <NumberInput source="price" />
            <SelectInput source="currency" choices={[
                { id: 'hrn', name: 'Hryvni' },
                { id: 'usd', name: 'US Dollars' },
                { id: 'eur', name: 'Euros' },
            ]} label="Test Options" />
        </SimpleForm>
    </Edit>
);

export default PriceBookEdit;
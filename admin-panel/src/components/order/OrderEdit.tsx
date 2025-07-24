import React from 'react';
import { DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <SelectInput source="status" choices={[
                { id: 'processing', name: 'processing' },
                { id: 'shipped', name: 'shipped' },
                { id: 'delivered', name: 'delivered' },
                { id: 'cancelled', name: 'cancelled' },
                { id: 'failed', name: 'failed' },
            ]} label="Order status" />
            <SelectInput source="shipping.status" choices={[
                { id: 'warehouse', name: 'warehouse' },
                { id: 'shipped', name: 'shipped' },
                { id: 'delivered', name: 'delivered' }
            ]} label="Shipping status" />
            <TextInput source="shipping.tracking_number" />
            <TextInput source="shipping.notes" />
        </SimpleForm>
    </Edit>
);

export default OrderEdit;

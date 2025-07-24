import React from 'react';
import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { ImagesCarousel } from '../customComponents/ImagesCarousel.tsx';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="descriptionShort" />
            <ReferenceField source="brand_id" reference="brand" />
            <TextField source="type" />
            <TextField source="size" />
            <TextField source="sku" />
            <ReferenceField source="price_book_id" reference="price_book" />
            <ReferenceField source="category_id" reference="category" />
            <BooleanField source="is_active" />
            <ImagesCarousel />
        </SimpleShowLayout>
    </Show>
);
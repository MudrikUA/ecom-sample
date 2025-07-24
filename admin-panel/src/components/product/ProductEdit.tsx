import React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput } from "react-admin";
import { ImagesUpload } from "../customComponents/ImagesUpload.tsx"; 

export const ProductEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="descriptionLong" />
                <TextInput source="descriptionShort" />
                <ReferenceInput source="brand_id" reference="brand" />
                <TextInput source="type" />
                <TextInput source="size" />
                <TextInput source="sku" />
                <ReferenceInput source="category_id" reference="category" />
                <BooleanInput source="is_active" />

                {/* 👇 Окремий компонент для зображень */}
                <ImagesUpload />
            </SimpleForm>
        </Edit>
    );
};

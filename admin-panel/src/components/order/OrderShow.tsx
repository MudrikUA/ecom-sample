import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, Grid } from '@mui/material';
import React from 'react';
import { DateField, FunctionField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';


const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h6">Order #<TextField source="id" variant="h6" />:</Typography>
            <ReferenceField source="user_id" reference="user" />
            <NumberField source="total_price" />
            <TextField source="currency" />
            <TextField source="status" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <Accordion >
                <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                    <Typography component="span" variant="h6">Shipping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography variant="subtitle2">Customer Full Name: <FunctionField
                            label="Customer Full Name"
                            render={record => `${record?.shipping?.customer_first_name || ""} ${record?.shipping?.customer_last_name || ""}`.trim()}
                        /></Typography>
                        <Typography variant="subtitle2">Customer Phone: <TextField source="shipping.customer_phone" /></Typography>
                        <Typography variant="subtitle2">Shipping Address: <TextField source="shipping.address" /></Typography>
                        <Typography variant="subtitle2">Shipping City: <TextField source="shipping.city" /></Typography>
                        <Typography variant="subtitle2">Shipping Country: <TextField source="shipping.country" /></Typography>
                        <Typography variant="subtitle2">Shipping postal code: <TextField source="shipping.postal_code" /></Typography>
                        <Typography variant="subtitle2">Shipping method: <ReferenceField source="shipping.shipping_method_id" reference="shipping-method" /></Typography>
                        <Typography variant="subtitle2">Shipping status: <TextField source="shipping.status" /></Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                    <Typography component="span" variant="h6">Billing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography variant="subtitle2">Transaction id: <TextField source="payment.transaction_id" /></Typography>
                        <Typography variant="subtitle2">Payment method: <ReferenceField source="payment.payment_method_id" reference="payment-method" /></Typography>
                        <Typography variant="subtitle2">Payment status: <TextField source="payment.status" /></Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </SimpleShowLayout>
    </Show>
);

export default OrderShow;
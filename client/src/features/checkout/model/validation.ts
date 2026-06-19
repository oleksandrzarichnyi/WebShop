import * as yup from 'yup';

export const contactsSchema = yup.object({
  firstName: yup
    .string()
    .required('Enter your first name'),

  lastName: yup
    .string()
    .required('Enter your last name'),

  phone: yup
    .string()
    .required('Enter your phone number')
    .matches(/^\+380\d{9}$/, 'Format: +380XXXXXXXXX'),

  email: yup
    .string()
    .required('Enter your email')
    .email('Invalid email format'),
});

export const deliverySchema = yup.object({
  city: yup
    .string()
    .required('Select a city'),

  warehouse: yup
    .string()
    .required('Select a warehouse'),
});

export type ContactsFormData = yup.InferType<typeof contactsSchema>;
export type DeliveryFormData = yup.InferType<typeof deliverySchema>;
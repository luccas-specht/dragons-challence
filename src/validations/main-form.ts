import * as Yup from 'yup';

export const mainFormSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(10, 'Mínimo de 10 caracteres.')
    .required('Por favor, preencha este campo.'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres.')
    .required('Por favor, preencha este campo.'),
});

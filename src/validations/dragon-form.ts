import * as Yup from 'yup';

export const dragonFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Mínimo de 5 caracteres.')
    .required('Por favor, preencha este campo.'),
  type: Yup.string()
    .min(5, 'Mínimo de 5 caracteres.')
    .required('Por favor, preencha este campo.'),
  histories: Yup.string()
    .min(5, 'Mínimo de 5 caracteres.')
    .required('Por favor, preencha este campo.'),
});

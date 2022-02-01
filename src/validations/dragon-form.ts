import * as Yup from 'yup';

export const dragonFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Mínimo de 3 caracteres.')
    .required('Por favor, preencha este campo.'),
  type: Yup.string()
    .min(3, 'Mínimo de 3 caracteres.')
    .required('Por favor, preencha este campo.'),
  histories: Yup.string()
    .min(10, 'Mínimo de 5 caracteres.')
    .required('Por favor, preencha este campo.'),
});

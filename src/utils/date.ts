import moment, { Moment } from 'moment';

moment.locale('pt-br');

export const formatDate = (
  date: Date | string | Moment,
  format: string = 'DD/MM/yyyy'
) => moment(date).format(format);

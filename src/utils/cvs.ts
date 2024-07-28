import { ListItem } from '../models/api-response.model';

export const convertToCSV = (list: ListItem[]) => {
  return list
    .reduce<string[]>(
      (acc, el) => {
        const str = Object.values(el).join(',');
        return [...acc, str];
      },
      ['name,url,id']
    )
    .join('\r\n');
};

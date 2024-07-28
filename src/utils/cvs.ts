import { ListItem } from '../models/api-response.model';

const convertToCSV = (list: ListItem[]) => {
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

export const downloadCSV = (fileName: string, data: ListItem[]): void => {
  const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
  const csvURL = URL.createObjectURL(csvData);
  const link = document.createElement('a');
  link.href = csvURL;
  link.download = `${fileName}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

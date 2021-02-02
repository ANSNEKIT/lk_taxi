import * as React from 'react';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';
import clsx from "clsx";

const columns: ColDef[] = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'uuid', headerName: 'UUID', width: 100 },
  { field: 'data', headerName: 'Дата', width: 150, type: 'dateTime' },
  { field: 'status', headerName: 'Статус', width: 110 },
  {
    field: 'summ',
    headerName: 'Сумма',
    type: 'number',
    width: 150,
  },
  {
    field: 'orderLink',
    headerName: 'Чек',
    description: 'Этот столбец не сортируется',
    sortable: false,
    flex: 1
  },
];

const rows: RowsProp = [
  { id: 1, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 2, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 3, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 4, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 5, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 6, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 7, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 8, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 9, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 10, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 11, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 12, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 13, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 14, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
  { id: 15, uuid: 11223344, data: '18.01.2021 15:32', status: 'Завершен', summ: '156511.00', orderLink: 'https://ya.ru' },
];

export interface StandardComponentProps {
  classes: any;
  open: boolean;
}

export default function Tranzactions({ classes, open }: StandardComponentProps) {
  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })} style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1, margin: 100 }}>
        <DataGrid rows={rows} columns={columns} pageSize={25} />
      </div>
    </main>
  );
}
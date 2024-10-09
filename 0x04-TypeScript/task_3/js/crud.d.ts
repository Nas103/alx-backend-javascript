// task_3/
// task_3/js/crud.d.ts
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export type RowID = number;

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

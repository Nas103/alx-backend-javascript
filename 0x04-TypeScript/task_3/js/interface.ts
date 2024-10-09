// task_3/js/interface.ts

// Define RowID type as a number
export type RowID = number;

// Define RowElement interface with optional age
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional field
}

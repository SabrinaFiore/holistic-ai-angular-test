export interface Customer {
  id: number;
  name: string;
}

export function createCustomerData(): Customer[] {
  return [
    { id: 1, name: 'Maria Anders' },
    { id: 2, name: 'Ana Trujillo' },
    { id: 3, name: 'Thomas Hardy' },
    { id: 4, name: 'Dave Williams' },
    { id: 5, name: 'Alice Smith' },
    { id: 6, name: '' },
  ];
}

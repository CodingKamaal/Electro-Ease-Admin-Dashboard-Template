'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data: Payment[] = [
  {
    id: 'Acer',
    amount: 316,
    status: 'Active',
    email: 'Acer 21.5 inch 75Hz',
    model: 'AB11ZM0',
  },
  {
    id: 'Lenovo',
    amount: 242,
    status: 'Active',
    email: 'Lenovo Thin Air',
    model: 'AB11ZM0',
  },
  {
    id: 'Xiaomi',
    amount: 837,
    status: 'processing',
    email: 'Xiaomi Notebook 14 Ultra',
    model: 'AB11ZM0',
  },
  {
    id: 'Oneplus',
    amount: 874,
    status: 'Active',
    email: 'Oneplus 13R',
    model: 'AB11ZM0',
  },
  {
    id: 'Asus',
    amount: 721,
    status: 'Inactive',
    email: 'Asus vivobook 15',
    model: 'AB11ZM0',
  },
  {
    id: 'Dell',
    amount: 874,
    status: 'Active',
    email: 'Dell inspire 3000',
    model: 'AB11ZM0',
  },
  {
    id: 'Hewlett Peckard',
    amount: 721,
    status: 'Inactive',
    email: 'HP laserjet printer',
    model: 'AB11ZM0',
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'Active' | 'Inactive';
  email: string;
  model: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'S. No.',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Device
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'model',
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Model Number
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('model')}</div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <>
          <Button className="bg-green-500">Approve</Button>
          <Button className="bg-red-500 ml-4">Reject</Button>
        </>
      );
    },
  },
];

export function DeviceRequestTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full px-4 h-[100vh]">
      {/* <h2 className="text-3xl font-bold tracking-tight mt-8">Customers</h2> */}
      <div className="flex items-center py-4 items-center mt-8">
        <h2 className="text-3xl font-bold tracking-tight mr-8">
          Device Request
        </h2>
        <Input
          placeholder="Filter customers..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

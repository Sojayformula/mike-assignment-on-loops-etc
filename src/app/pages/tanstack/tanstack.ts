import { Component, effect, inject, signal } from '@angular/core';
import { Pageservice, User } from '../../service/pageservice';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

import {
  injectTable,
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  sortFn_text,
  columnFilteringFeature,
  createFilteredRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  createPaginatedRowModel,
  rowSelectionFeature,
  ColumnDef
} from '@tanstack/angular-table';
import { TanStackUserModel } from '../../model';






const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    text: sortFn_text
  },

  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: {
    includesString: filterFn_includesString
  },

  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),

  rowSelectionFeature
});

// const columns: ColumnDef<typeof features, User>[] = [
const columns: ColumnDef<typeof features, User>[] = [
  
  {
    // accessorKey: 'name',
    accessorFn: (user) => `${user.fname} ${user.lname}`.trim(),
    header: 'Name',
    sortFn: 'text',
    filterFn: 'includesString'
  },
  {
    accessorKey: 'email',
    header: 'Email',
    sortFn: 'text',
    filterFn: 'includesString'
  },
  {
    accessorKey: 'username',
    header: 'Username',
    sortFn: 'text',
    filterFn: 'includesString'
  }
];


@Component({
  selector: 'app-tanstack',
  imports: [],
  templateUrl: './tanstack.html',
  styleUrl: './tanstack.scss',
})
export class Tanstack {

  users = signal<User[]>([]);


  userService = inject(Pageservice)
  queryClient = inject(QueryClient);

  pageIndex = signal(0);
  pageSize = signal(5);
  search = signal('');


  // usersQuery = injectQuery(() => ({
  //   queryKey: ['users'],
  //   queryFn: () => this.userService.getUsers2(1, 5, ''),
    // staleTime: 60_000,
    // refetchOnWindowFocus: true
  // }));

usersQuery = injectQuery(() => ({
  queryKey: [
    'users',
    this.pageIndex(),
    this.pageSize(),
    this.search()
  ],

  queryFn: () => this.userService.getUsers2(
      this.pageIndex() + 1,
      this.pageSize(),
      this.search()
    )
}));

// this.pageIndex() + 1, This usually happens because your table and your API count pages differently.
// TanStack Table commonly uses zero-based indexes: 0, 1, 2, 3.
// Your API may expect one-based page numbers: 1, 2, 3, 4.




  constructor() {
  effect(() => {
    console.log('Users:', this.usersQuery.data());

    console.log('Loading:', this.usersQuery.isPending());
  console.log('Error:', this.usersQuery.error());
  console.log('Users:', this.usersQuery.data());
  });

  const data = this.usersQuery.data(); 
}




table = injectTable(() => ({features, columns,

  data: this.usersQuery.data()?.rows ?? [],
  rowCount: this.usersQuery.data()?.total ?? 0,

  getRowId: user => String(user.id),

  manualFiltering: true,
  manualPagination: true,

  state: {
    pagination: {
      pageIndex: this.pageIndex(),
      pageSize: this.pageSize()
    }
  }
}));


// tablee = injectTable(()=>({features, columns,
//   data: this.usersQuery.data()?.rows?? [],

//   getRowId: user => String(user.id),
//   initialState:{
//     pagination:{
//       pageIndex: 0,
//       pageSize: 5
//     }
//   }
// }))













  // ADD
async addUser() {
  const newUser: User = {
    id: Date.now(),
    fname: 'New',
    lname: 'User',
    email: 'newuser@example.com',
    username: 'newuser'
  };

  try {
    await this.userService.createUser(newUser);

    await this.queryClient.invalidateQueries({
      queryKey: ['users']
    });

    console.log('User added successfully');
  } catch (error) {
    console.error('Failed to add user:', error);
  }
}

// DELETE
async deleteUser(userId: any) {
  try {
    await this.userService.deleteUser(userId);

    await this.queryClient.invalidateQueries({
      queryKey: ['users']
    });

    console.log('User deleted successfully');
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
}


// event handlers
onFilterChange(columnId: string, event: Event) {
  const value = (event.target as HTMLInputElement).value;

  this.pageIndex.set(0);
  this.search.set(value);
}

onPageSizeChange(event: Event) {
  const size = Number((event.target as HTMLSelectElement).value);

  this.pageSize.set(size);
  this.pageIndex.set(0);
}

nextPage() {
  const total = this.usersQuery.data()?.total ?? 0;

  if ((this.pageIndex() + 1) * this.pageSize() < total) {
    this.pageIndex.update(page => page + 1);
  }
}

previousPage() {
  this.pageIndex.update(page => Math.max(0, page - 1));
}


// Make Math available to the HTML template
Math = Math;

// Go to the first page
firstPage() {
  this.pageIndex.set(0);
}

// Go to the last page
lastPage() {
  const total = this.usersQuery.data()?.total ?? 0;

  const lastIndex = Math.max(0, Math.ceil(total / this.pageSize()) - 1);

  this.pageIndex.set(lastIndex);
}

}





// onFilterChange(columnId: string, event: Event) {
//   const value = (event.target as HTMLInputElement).value;

//   this.pageIndex.set(0);
//   this.search.set(value);
// }

// onPageSizeChange(event: Event) {
//   const size = Number((event.target as HTMLSelectElement).value);

//   this.pageSize.set(size);
//   this.pageIndex.set(0);
// }

// nextPage() {
//   this.pageIndex.update(page => page + 1);
// }

// previousPage() {
//   this.pageIndex.update(page => Math.max(0, page - 1));
// }






// table = injectTable(() => ({features, columns,
  //   data: this.usersQuery.data() ?? [],

  //   getRowId: (user) => String(user.id),
  //   initialState: {
  //     pagination: {
  //       pageIndex: 0,
  //       pageSize: 5
  //     }
  //   }
  // }));

//   table = injectTable(() => ({ features, columns,

//   data: this.usersQuery.data()?.rows ?? [],
//   rowCount: this.usersQuery.data()?.total ?? 0,

//   getRowId: user => String(user.id),

//   manualFiltering: true,
//   manualPagination: true,

//   state: {
//     pagination: {
//       pageIndex: this.pageIndex(),
//       pageSize: this.pageSize()
//     }
//   }
// }));











//  onFilterChange(columnId: string, event: Event){
//     const value = (event.target as HTMLInputElement).value;
//     this.table.getColumn(columnId)?.setFilterValue(value);
//   }

//   onPageSizeChange(event: Event){
//     const size = Number((event.target as HTMLSelectElement).value);
//     this.table.setPageSize(size);
//   }
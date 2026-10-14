import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Staff } from '../../staff/staff';
import { Pageservice } from '../../service/pageservice';
import { UserModel } from '../../model';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-signal',
  imports: [FormsModule, CommonModule],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
})
export class Signal implements OnInit{



  employee2 = signal([
  { id: 1, name: "Luis", age: 23, salary: 4000, department: 'IT' },
  { id: 2, name: "John", age: 10, salary: 5000, department: 'hr' },
  { id: 3, name: "Yaw", age: 30, salary: 6000, department: 'Finance' },
  { id: 4, name: "Odoi", age: 40, salary: 8000, department: 'Finance' },
  { id: 5, name: "Kofi", age: 35, salary: 7000, department: 'Operations' }
]);

 

  constructor(private pageService: Pageservice){
    // console.log("SIGNAL",this.name)

    this.userModel = new UserModel()
  }


  ngOnInit(): void {
    this.fetchuser()
  }



  // UPDATE SALARY
  updateSalary() {
  this.employee2.update(list =>
    list.map(user =>
      user.id === 1
        ? { ...user, salary: 4500 }
        : user
    )
  );

  console.log(this.employee2());
}

   
   //============================================
  //         COUNTERS
  // =============================================
  age = signal(0);

  increaseAge(){
    this.age.update(value => value + 1)
  }

   decreaseAge(){
    this.age.update(value => value - 1)
  }

  reset(){
    this.age.set(0)
  }
  



  // DARK MODE AND LIGHT ,MODE
  darkMode = signal(false);

toggleTheme() {
  this.darkMode.update(value => !value);

}


// PGINATION
currentPage = signal(1);
pageSize = signal(5);

paginatedStaff = computed(() => {
  const start = (this.currentPage() - 1) * this.pageSize();

  return this.APIData().slice(start, start + this.pageSize());});


totalPages = computed(() => Math.ceil(this.APIData().length / this.pageSize()));

previousPage() {this.currentPage.update(page => Math.max(1, page - 1));}

nextPage() { this.currentPage.update(page => Math.min(this.totalPages(), page + 1));}




  // ============================================
  // USE SIGNAL FOR FORMS
  // ============================================
  // name = signal("");
  

  // submit(){
  //   if(this.name()){
  //     this.submitted.set(true)
  //   }
  // }

  staff = signal<any[]>([])
  selectedStaff = signal<any | null>(null)
  formData = signal<any>({})

  loadingForm = signal(false)
  saving = signal(false)
  errorMessage = signal('')
  successful = signal('')

  submitted = signal(false);
  message = signal("");



  getStaff(){
    this.loading.set(true)
    this.errorMessage = signal('')

    console.log('fetchuser() called');
    this.pageService.getuser().subscribe({
      next: (res)=>{
        console.log("Form API data", res)
        this.staff.set(res);
        console.log("Form response", this.APIData())
        this.loading.set(false)
      },
      error:(err)=>{
        console.log("Form error", err)
         this.loading.set(false)
         this.errorMessage.set('Unable to load staff data')
      }
    })
  }



  updateField(field: string, value: any){
    this.formData.update(data => ({...data, [field]: value}))
  }

 
  submitForm(form: NgForm) {
  this.saving.set(true);

  const data = this.formData();

  this.pageService.createStaff(data).subscribe({
    next: (res) => {
      this.staff.update(list => [...list, res]);

      this.saving.set(false);
      this.successful.set('Staff created successfully');

      //  PASS MESSAGE
      if (this.formData()) {
      this.submitted.set(true);
      const staff = this.formData();
      this.message.set(
        `${staff.fname} ${staff.lname} created successfully!`
      );

      setTimeout(() => {
    this.message.set('');
    this.submitted.set(false);
  }, 2000);
    }

      form.resetForm();
    },

    error: (err) => {
      this.saving.set(false);
      console.error('Failed to create staff:', err);
    }
  });
}



   // ============================================
  // USE SIGNAL FOR TABLE
  // ============================================
  APIData = signal<any[]>([])

  //  APIData: any[]=[]
  userModel: UserModel

  newStaff = signal("");
  loading = signal(false)
  


  staffList = signal([
    {id: 1, name: "Kofi"},
    {id: 2, name: "Ama"}
  ])


  fetchuser(){
    this.loading.set(true)
    console.log('fetchuser() called');
    this.pageService.getuser().subscribe({
      next: (res)=>{
        console.log("API data", res)
        this.APIData.set(res);
        console.log("Response", this.APIData())
        this.loading.set(false)
      },
      error:(err)=>{
        console.log("error", err)
         this.loading.set(false)
      }
    })
  }




addStaff(form: NgForm) {
  console.log('Form submitted:', form.value);

  const payload = {
    fname: form.value.fname,
    lname: form.value.lname,
    email: form.value.email,
    role: form.value.role || 'user',
    department: form.value.department,
    position: form.value.position,
    phone: form.value.phone,
    status: form.value.status || 'active',
    gender: form.value.gender,
    dob: form.value.dob
  };

  console.log('Payload:', payload);

  this.pageService.addUser(payload).subscribe({
    next: (res) => {
      console.log('POST response:', res);

      this.APIData.update(staff => [...staff, res])

      console.log('Updated table data:', this.APIData());

      form.resetForm();
    },
    error: (err) => {
      console.error('Failed to add staff:', err);
    }
  });
}





deleteStaff(id: string) {
 
  this.pageService.deleteUser(id).subscribe({
    next: () => {
      console.log('Staff deleted:', id);

      this.APIData.update(staff =>
        staff.filter(user => (user.id) !== (id))
      );
    },
    error: (err) => {
      console.error('Failed to delete staff:', err);
    }
  });
}

}
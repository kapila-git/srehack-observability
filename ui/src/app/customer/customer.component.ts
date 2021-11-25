import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerDetails: any[];
  customer: any = {};
  registerForm: FormGroup;
  submitted = false; 
  accountDetails: any[];
  id: number;

  constructor(
    private customerService: CustomerService,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      pesel: ['', Validators.required],
      type: ['', Validators.required],
      account: ['', Validators.required],

    });
    this.getCustomerData();
    this.getAccountData();
    delete this.customer.accounts.customerId;
  }

  getCustomerData() {
    this.customerService.getAll().subscribe(
      (data) => {
        this.customerDetails = data;
        this.customerDetails.forEach(element => {
          if (element.accounts == null) {
            element.accounts = ['-'];
            console.log(element.accounts)
          }
        });
        console.log(this.customerDetails)
      }
    );
  }

  getAccountData() {
    this.accountService.getAll().subscribe(
      (data) => {
        this.accountDetails = data;
      }
    );
  }
 // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

  saveCustomer() {
    const data = {
      pesel: this.customer.pesel,
      name: this.customer.name,
      type: this.customer.type,
      accounts: [this.customer.accounts],
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.customerService.createCustomer(data).subscribe(
        (data) => {
          alert("Data added succesfully!!!");
          window.location.reload();          
        }
      );
    }
  }

  closeForm() {
    this.registerForm.reset();
  }

  delete(event: any, item: any) {
    this.id = item.id;
    if (confirm('Are you sure to delete this customer?')) {
      this.customerService.deleteCustomer(this.id).subscribe((data) => {
        console.log(data)
        window.location.reload();     
      });
    }
  }

}

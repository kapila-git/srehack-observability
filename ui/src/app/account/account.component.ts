import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountDetails: any[];
  customerDetails: any[];
  account: any = {};
  registerForm: FormGroup;
  submitted = false;
  id: number;

  constructor(
    private accountService: AccountService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      number: ['', Validators.required],
    });
    this.getAccountData();
    this.getCustomerData();
  }

  getAccountData() {
    this.accountService.getAll().subscribe(
      (data) => {
        this.accountDetails = data;
      }
    );
  }

  getCustomerData() {
    this.customerService.getAll().subscribe(
      (data) => {
        this.customerDetails = data;
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  saveAccount() {
    const data = {
      customerId: this.account.customerId,
      number: this.account.number,
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.accountService.createAccount(data).subscribe(
        (data) => {
          alert("Data added succesfully!!!");
          window.location.reload();
          console.log(data);
        }
      );
    }
  }

  closeForm() {
    this.registerForm.reset();
  }

  delete(event: any, item: any) {
    this.id = item.id;
    if (confirm('Are you sure to delete this account?')) {
      this.accountService.deleteAccount(this.id).subscribe((data) => {
        window.location.reload();     
      });
    }
  }


}

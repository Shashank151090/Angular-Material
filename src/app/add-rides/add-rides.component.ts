import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  
import { Time } from '@angular/common';


@Component({
  selector: 'app-add-rides',
  templateUrl: './add-rides.component.html',
  styleUrls: ['./add-rides.component.css']
})
export class AddRidesComponent implements OnInit {

  addRidesForm: FormGroup;  
  empId:string='';  
  vehicle:string=''; 
  vehicleNumber: string=''; 
  vacantSeats: number=0;
  pickup:string='';  
  destination:string=''; 
  rideList:any =[]; 
  

  constructor(private fb: FormBuilder) { 
    this.addRidesForm = fb.group({  
      'empId' : [null, Validators.required],  
      'vehicle' : [null, Validators.required],
      'vehicleNumber': [null, Validators.required],  
      'vacantSeats': [Validators.required],
      'time' : [Validators.required],
      'pickup' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(500)])],  
      'destination' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(500)])],  
    });  
  }

  ngOnInit() {
  }

  onFormSubmit(value){
    this.rideList.push(value);
    console.log(this.rideList);
    localStorage.saveRide = JSON.stringify(this.rideList);
    this.addRidesForm.reset();
  }

}

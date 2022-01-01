import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  panelOpenState = false;
  step = -1;
  interploation = "{{ }}"
  
  employees = [
    {
      fullName: "Prashant katiyar",
      empId: 701895,
      companyName: "hfcl"
    },
    {
      fullName: "krashant katiyar",
      empId: 7018292,
      companyName: "hfcl"
    },
    {
      fullName: "Ajay katiyar",
      empId: 701895,
      companyName: "hfcl"
    }
  ]

 
 
  constructor(private route :Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.route.navigate(['/dashboard']);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

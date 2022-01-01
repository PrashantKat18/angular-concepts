import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  step = -1;
  interploation = "{{ }}";
  interploation1 = "{{ | }}"

  constructor(private route: Router) { }

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

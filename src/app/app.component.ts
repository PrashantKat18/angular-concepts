import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concepts';
  showHead = true;

  constructor(private router: Router,){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }

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

  // data binding (one way databinding)
  // string Interpolation
  // event binding -> onclick,mousehover,keyboard and mouse actions
  // property binding -> bind data component to view denoted by [] brackets
  // Attributes binding ->
  // class binding ->
  // style binding ->

  //two way data binding ([(ngModel)])

  // Attribute  binding
  colspan = 2;

  //event binding
  onClick(employee: any) {
    console.log(employee);
    alert(JSON.stringify(employee));
  }

  // property binding
  imgUrl = `../assets/ai.jpg`
  isActive = true;

  // style Binding
  mycolor = 'red'
  myColor = 'brown';
} 

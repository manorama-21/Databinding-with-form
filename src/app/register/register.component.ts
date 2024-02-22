import { Component } from '@angular/core';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Form1Component,Form2Component,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  blogtitle:string="";
  blogdetails:string="";
  imageURL:string="";
  blogURL:string="";
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""
  };
  contructor() {}
  submit(){
    console.log(this.register.name)
    console.log(this.register.email)
    console.log(this.register.password)

    if(this.register.password !== this.register.repeatPass){
      console.log("no concuerdan las contraseñas")
      return
      ;
    }
  }
}

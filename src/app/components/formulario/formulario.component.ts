import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      texto: new FormControl('',[Validators.required,Validators.minLength(10)]),
      email:  new FormControl('',[Validators.required, Validators.minLength(5),Validators.email]),
      numero: new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern("[0-9]")])
    });
  }
  
  formulario: FormGroup;

  constructor() {
    this.formulario = this.createFormGroup();
   }
  ngOnInit() {
  }
  onResetForm(){
    this.formulario.reset();
  }
  onSaveForm(){
    if(this.formulario.valid){
      console.log("GUARDO", this.formulario.value);  
    } else{
      console.log("NO GUARDO", this.formulario.value);  

    }
    
  }
  get texto(){
    return this.formulario.get('texto');
  }
  get email(){
    return this.formulario.get('email');
  }
  get numero(){
    return this.formulario.get('numero');
  }

}
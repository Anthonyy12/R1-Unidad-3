import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { Cargo } from 'src/app/models/cargo';
import { Ciudad } from 'src/app/models/ciudad';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService ){
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      cargo: ['', Validators.required],
      area: ['', Validators.required]
    })
  }

  ngOnInit(): void{

  }

  registrarUsuario(){
    console.log(this.usuarioForm)

    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      edad: this.usuarioForm.get('edad')?.value,
      genero: this.usuarioForm.get('genero')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
    }

    const AREA: Area = {
      area: this.usuarioForm.get('area')?.value,
    }

    const CARGO: Cargo = {
      cargo: this.usuarioForm.get('cargo')?.value,
    }

    const CIUDAD: Ciudad = {
      ciudad: this.usuarioForm.get('ciudad')?.value,
    }

    console.log(USUARIO, AREA, CARGO, CIUDAD);
    this.toastr.success('Usuario', 'Registro exitoso');
    this.router.navigate(['/eventos']);
  }
}

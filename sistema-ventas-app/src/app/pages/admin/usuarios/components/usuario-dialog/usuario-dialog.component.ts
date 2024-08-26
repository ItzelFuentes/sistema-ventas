import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseForm } from '../../../../../shared/utils/base-forms';
import { Subject, takeUntil } from 'rxjs';
import { Usuario } from '../../../../../shared/models/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

enum Action {
  EDIT = "edit",
  NEW = "new"
}

@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.scss'
})
export class UsuarioDialogComponent implements OnInit, OnDestroy{
  
  private destroy$ = new Subject<any>();
  titleButton = "Guardar";
  actionTODO = "Action.NEW"
  userForm = this.fb.group({
    cveUsuario: [''],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    //email: ['', [Validators.required, Validators.email]],
    cveRol: ['', [Validators.required]],
    password: ['',[Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, 
              public dialogRef: MatDialogRef<UsuarioDialogComponent>,
              private fb: FormBuilder,
              public baseForm: BaseForm,
            private usuarioService: UsuariosService,
          private usuarioSvc: UsuariosService){}

  ngOnInit(): void {
    this.pathData();
  }

  pathData(){
    if(this.data.user.cve){
      this.userForm.patchValue({
        cveUsuario: this.data?.user.cveUusario,
        nombre: this.data?.user.nombre,
        apellidos: this.data?.user.apellidos,
        username: this.data?.user.username,
        cveRol: this.data?.user.cveRol.toString(),
      });

      this.userForm.get("username")?.disable();

      //eliminar las validaciones de password y confirm password
      this.userForm.get("password")?.setValidators(null);
      this.userForm.get("password")?.setErrors(null);
      this.userForm.get("confirmPassword")?.setValidators(null);
      this.userForm.get("confirmPassword")?.setErrors(null);


      this.userForm.updateValueAndValidity();
      
      

      this.titleButton = "Actualizar";
      this.actionTODO = Action.EDIT;
    }else{
      //INSERT
      this.titleButton = "Guardar";
      this.actionTODO = Action.NEW;
    }
  }

  onSave() {
    if (this.userForm.invalid) return;

    var formValue = this.userForm.getRawValue();

    if (this.actionTODO == Action.NEW){
      //Insert
      var newUser: Usuario = {
        nombre: formValue.nombre!,
        apellidos: formValue.apellidos!,
        username: formValue.username!,
        password: formValue.password!,
        cveRol: formValue.cveRol!
      }

      this.usuarioSvc.insertarUsuario(newUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe( (data: Usuario) => {
        this.dialogRef.close(data);

      });

    } else {
      //Actualización
      var updateUser: Usuario = {
        cveUsuario: parseInt(formValue.cveUsuario!),
        nombre: formValue.nombre!,
        apellidos: formValue.apellidos!,
        cveRol: formValue.cveRol!
      }

      this.usuarioSvc.actualizarUsuario(updateUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe( (data: Usuario) => {
        this.dialogRef.close(data);

      });
    }
  }
  


  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}

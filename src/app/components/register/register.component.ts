import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, RegisterData } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if(this.registerForm.valid) {
      const formData = this.registerForm.value as RegisterData;

      this.authService.register(formData).subscribe({
        next: () => {
          alert('Usuario registrado com sucesso!');
          this.router.navigate(['/login'])
        },
        error: () => {
          alert('Erro ao registrar usuario!')
        }
      })
    }
  }

}

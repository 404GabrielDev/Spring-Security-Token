import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, LoginData, RegisterData } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router:Router) {}

  onLogin() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value as LoginData).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          alert('Login bem sucedido!');
          this.router.navigate(['/pag-protected'])
        },
        error: () => alert('Login inválido')
      })
    }
  }

}

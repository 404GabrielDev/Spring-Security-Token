import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-page-protected',
  imports: [],
  templateUrl: './page-protected.component.html',
  styleUrl: './page-protected.component.scss'
})
export class PageProtectedComponent {

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.pageProtected().subscribe({
      next: (res:any) => {
        console.log("Projeto full stack work!", res);
        alert("Pagina protegida desbloqueada");
      },
      error: (err) => {
        console.error("Erro ao tentar entrar na segurança!", err)
      }
    })
  }
}

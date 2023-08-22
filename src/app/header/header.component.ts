import { Component } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService:AuthServicesService ){}

  onLogout() {
    this.authService.logout();                      
  }
}

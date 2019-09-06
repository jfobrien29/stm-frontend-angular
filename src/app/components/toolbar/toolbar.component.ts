import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userLoggedIn = false;
  userName = '';

  constructor(public userService: UserService,
    public authService: AuthService) { }

  ngOnInit() {
    this.setCurrentUser();

    this.authService.userChangeSubject.asObservable().pipe(startWith()).subscribe(() => {
      this.setCurrentUser();
    });
  }

  private setCurrentUser() {
    this.userService.getCurrentUser().then((user) => {
      this.userLoggedIn = true;
      this.userName = user.displayName;
      console.log(user);
    }, (e) => {
      this.userLoggedIn = false;
      this.userName = '';
    });
  }

  logout() {
    this.authService.doLogout()
      .then(() => { }, (error) => {
        console.log("Logout error", error);
      });
  }

}

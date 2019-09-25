import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseUserModel } from '../../models/user.model';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userLoggedIn = false;
  userName = '';
  userImage?: string;
  private uid = '';

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
      this.userImage = user.photoURL;
      this.uid = user.uid;
      console.log(user);
    }, (e) => {
      this.userLoggedIn = false;
      this.userName = '';
      this.userImage = '';
      this.uid = '';
    });
  }

  logout() {
    this.authService.doLogout()
      .then(() => { }, (error) => {
        console.log("Logout error", error);
      });
  }

}

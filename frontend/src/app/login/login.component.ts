import {AfterViewInit, Component, isDevMode, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  form = this.fb.group({
    eMail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  loading = false;
  returnUrl: string;
  error: string;
  showUserPassword = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserToken) {
      this.router.navigate(['/']);
    }
  }

  toggleUserPassword(): void {
    this.showUserPassword = this.showUserPassword === false;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  ngAfterViewInit(): void {
    if (isDevMode()) {
      this.snackBar.open('Running in debug mode', 'Dismiss', {
        duration: 6000
      });
    }
  }

  submit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.form.controls.eMail.value, this.form.controls.password.value)
      .then((result) => {
        this.router.navigate([this.returnUrl]);
      }).catch((error) => {
      this.error = error;
      this.loading = false;
      this.snackBar.open('Incorrect email or password.', 'Dismiss', {
        duration: 3000
      });
    });
  }

}
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserToken() {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        const token = result.user.getIdToken(true).then();
        console.log(token);
        token.then(x => {
          localStorage.setItem('token', x);
          this.currentUserSubject.next(x);
        });
        return token;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
import { Component } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TokensAndCookies';

  constructor(private cookie: CookieService) {}

  setCookie() {
    // this.cookie.set('user_id', 'Hania12345@');
    // this.cookie.set('user_name', 'HaniaSalman');
    const url = 'http://localhost:8080/HelloWorld';
    const data = axios.get(url, { withCredentials: true }).then((response) => {
      console.log('response from server: ', response.data);
      this.cookie.set('user_id', 'Hania12345@');
      this.cookie.set('user_name', 'HaniaSalman');
      // this.cookie.set('user_name', 'HaniaSalman', 365, '/', '', true, 'Strict');
    });
  }

  getCookie() {
    const value: string = this.cookie.get('user_name');
    console.log(value);
    console.log(this.cookie.get('user_id'));
    console.log('http only cookie ', this.cookie.get('testId'));
  }

  removeCookie() {
    this.cookie.delete('user_name');
    alert('Cookie user_name has been removed');
  }

  removeAllCookie() {
    this.cookie.deleteAll();
    alert('All Cookies have been removed');

    const cookieExists: boolean = this.cookie.check('user_name');

    if (cookieExists) {
      console.log('Find the cookie');

      console.log('The cookie value is ' + this.cookie.get('user_name'));
    } else {
      console.log("The cookie doesn't exist..");
    }
  }

  //local storage
  setlocalStorage() {
    let JSONDatas = [
      { id: 'OpenNew', label: 'Open New' },
      { id: 'ZoomIn', label: 'Zoom In' },
      { id: 'ZoomOut', label: 'Zoom Out' },
    ];

    localStorage.setItem('datas', JSON.stringify(JSONDatas));
  }

  getlocalStorage() {
    let data = localStorage.getItem('datas');
    console.log(data);
  }

  clearlocalStorage() {
    localStorage.clear();
  }
}

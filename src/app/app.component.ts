import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'taskpulse';
  token!: any;

  ngOnInit(): void {
    this.token = localStorage.getItem('taskpulsetoken');
  }

  logout() {
    localStorage.removeItem('taskpulsetoken');
    window.location.href = 'home';
  }
}

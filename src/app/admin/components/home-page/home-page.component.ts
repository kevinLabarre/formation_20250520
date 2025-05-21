import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interface/profile.interface';
import { UserServiceService } from '../../services/userService/user-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  profile?: Profile

  constructor(private service: UserServiceService) {
  }

  ngOnInit(): void {
    this.service.getProfile().subscribe({
      next: res => {
        this.profile = res
        console.log(res)
      }
    })
  }



}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit{
  constructor( private authService:AuthService) {
  }

  ngOnInit(): void {

    this.authService.getUser()
  }

}

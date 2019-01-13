import { Response } from '@angular/http';
import { TeaService } from '../services/tea.service';
import Tea from '../models/tea.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private teaService: TeaService) {}

  teasList: Tea[];
  ngOnInit() {
    this.teaService.getTeas()
    .subscribe(teas => {
      this.teasList = teas;
      console.log(teas);
    })
  }

}

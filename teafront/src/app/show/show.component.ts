import { switchMap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { TeaService } from '../services/tea.service';
import Tea from '../models/tea.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(
    private teaService: TeaService,
    private route: ActivatedRoute) {}

  public tea = {};

  getTea(){
    this.route.params.
    pipe(switchMap((params: Params) => this.teaService.oneTea(params['id'])))
    .subscribe(tea => {this.tea = tea.data; console.log(this.tea)});
  }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      (params['id']) ? this.getTea() : null;
    });
  }

}

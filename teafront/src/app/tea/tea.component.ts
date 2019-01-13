import { Response } from '@angular/http';
import { TeaService } from '../services/tea.service';
import Tea from '../models/tea.model';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.scss']
})
export class TeaComponent implements OnInit {
  @ViewChild('f') teaForm: NgForm;
  @ViewChild('f2') teaForm2: NgForm;

  constructor(private teaService: TeaService) {}

  public newTea: Tea = new Tea();

  teasList: Tea[];
  editTeas: Tea[] = [];
  
  @Input() enableEdit: boolean = false;

  ngOnInit(): void {
    this.teaService.getTeas()
    .subscribe(teas => {
      this.teasList = teas;
      console.log(teas);
    })
  }

  onSubmit (form: NgForm) {}

  onSubmit2 (form: NgForm) {}

  create() {
    this.teaService.createTea(this.newTea)
    .subscribe((res) => {
      this.teasList.push(res.data)
      this.newTea = new Tea()
    })
    this.teaForm.reset();
  }
  
  editTea(tea: Tea) {
    console.log(tea)
    if(this.teasList.includes(tea)){
      if(!this.editTeas.includes(tea)){
        this.editTeas.push(tea)
      }else{
        this.editTeas.splice(this.editTeas.indexOf(tea), 1)
        this.teaService.editTea(tea).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          console.error('Update Unsuccesful')
        })
      }
    }
    this.teaForm.reset();
  }

  submitTea(event, tea:Tea){
    if(event.keyCode == 13 && this.teaForm2.valid){
      this.editTea(tea)
    }
  }

  deleteTea(tea: Tea) {
    this.teaService.deleteTea(tea._id).subscribe(res => {
      this.teasList.splice(this.teasList.indexOf(tea), 1);
    })
  }



}
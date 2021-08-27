import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Csegei} from "./csegei";

@Component({
  selector: 'app-csege',
  templateUrl: './csege.component.html',
  styleUrls: ['./csege.component.scss']
})
export class CsegeComponent implements OnInit {


  @Input('testData') testData: number | undefined;

  @Output() voted = new EventEmitter<any>();


  csegeiek: Csegei[] = [];


  constructor() {
  }

  ngOnInit(): void {

    for (let i = 1; i < 10; i++)
      this.csegeiek.push({id: i, name: 'Norbie'+i, weapon: 'satori'+i});

    console.log(this.csegeiek);
    // this.voted.emit(this.csegeiek);
  }

  vote(agreed: any) {
    this.voted.emit(agreed);
  }

  attack(name: string, weapon: string) {
      alert(name + ' megtámadott ezzel: ' + weapon);
  }
}

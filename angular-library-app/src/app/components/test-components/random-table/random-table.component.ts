import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-random-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss']
})
export class RandomTableComponent implements OnInit {
  numbers: number[] = [];
  hasSeven: boolean = false;
  cssClasses: string[] = [];

  @Input() tableTitle : string = "table default title";
  @Output() newData = new EventEmitter<string>(); 

  ngOnInit(): void {
    this.generateRandomNumbers();
  }

  passData() {
    //emit 中的string实在newData中定义的类型
    this.newData.emit(new Date().toISOString());
  }

  generateRandomNumbers(): void {
    this.hasSeven = false;
    this.numbers = [];
    this.cssClasses = [];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * 10) + 1; // 1~10
      if (random === 7) {
        this.hasSeven = true;
      }
      this.numbers.push(random);
    }
    if (this.hasSeven) {
      this.cssClasses.push("header-find-seven");
    } else {
      this.cssClasses.push("header-default");
    }
  }
}
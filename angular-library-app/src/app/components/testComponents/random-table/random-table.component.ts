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
    this.numbers = [];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * 10) + 1; // 1~10
      this.numbers.push(random);
    }
  }
}
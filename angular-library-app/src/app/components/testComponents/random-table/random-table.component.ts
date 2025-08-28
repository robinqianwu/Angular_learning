import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.generateRandomNumbers();
  }

  generateRandomNumbers(): void {
    this.numbers = [];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * 10) + 1; // 1~10
      this.numbers.push(random);
    }
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { Rules } from '../../../../../core/models/app.model';

@Component({
  selector: 'rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.scss'],
})
export class RulingsComponent implements OnInit {
  @Input() rules!: Rules | null;
  @Input() view: string = 'list';

  constructor() {}

  ngOnInit(): void {}
}

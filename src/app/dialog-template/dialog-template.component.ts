import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IDialogData } from '../Domain/IDialogData';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.css']
})
export class DialogTemplateComponent implements OnInit, OnChanges {
  @Input() data: IDialogData;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  viewModel = {} as IDialogData;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.viewModel = {...this.data};
    }
  }
  reset() {
    this.viewModel = {...this.data};
  }
}

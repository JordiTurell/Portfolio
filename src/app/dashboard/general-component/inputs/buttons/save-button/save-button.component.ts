import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent{
  @Input() text: string = '';
  @Input() type: string = '';
  @Input() isLoading: boolean = false;
  @Output() action = new EventEmitter()
  
  handleClick() {
    this.isLoading = true;
    this.action.emit()     
  }

  reset(){
    this.isLoading = false
  }
}

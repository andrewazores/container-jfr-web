import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommandMessage } from 'src/app/app.component';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html'
})
export class ConnectButtonComponent {
  @Output() fired = new EventEmitter<CommandMessage>();
  @Input() hosts: JvmTarget[] = [];
  host = '';

  fire(): void {
    if (this.host.trim().length > 0) {
      this.fired.emit({ command: 'connect', args: [ this.host ] });
    } else {
      this.fired.emit({ command: 'disconnect' });
    }
    this.host = '';
  }
}

export interface JvmTarget {
  ip: string;
  hostname: string;
}
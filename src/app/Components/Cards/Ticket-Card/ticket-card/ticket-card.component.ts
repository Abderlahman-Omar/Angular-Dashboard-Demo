import { Component } from '@angular/core';
import { CopyClipboard } from 'flowbite';
import type { CopyClipboardOptions, CopyClipboardInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { TooltipOptions } from 'primeng/api';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css',
})
export class TicketCardComponent {
  $triggerEl: HTMLElement = document.getElementById(
    'copy-clipboard-button'
  ) as HTMLElement;

  $targetEl: HTMLInputElement = document.getElementById(
    'copy-text'
  ) as HTMLInputElement;

  options: CopyClipboardOptions = {
    contentType: 'input',
    htmlEntities: false, 
    onCopy: () => {
      console.log('text copied successfully!');
    },
  };

  instanceOptions: InstanceOptions = {
    id: 'copy-clipboard-example',
    override: true,
  };

  
  clipboard: CopyClipboardInterface = new CopyClipboard(
    this.$triggerEl,
    this.$targetEl,
    this.options,
    this.instanceOptions
  );
  tooltipOptions: TooltipOptions = {
    showDelay: 150,
    tooltipEvent: 'hover',
    tooltipPosition: 'bottom',
  };

}

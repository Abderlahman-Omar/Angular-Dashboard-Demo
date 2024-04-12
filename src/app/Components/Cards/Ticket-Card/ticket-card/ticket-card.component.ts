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
  // set the trigger element which will be clicked (ie. a button or text)
  $triggerEl: HTMLElement = document.getElementById(
    'copy-clipboard-button'
  ) as HTMLElement;

  // set the target element where the text will be copied from (ie. input field, code block)
  $targetEl: HTMLInputElement = document.getElementById(
    'copy-text'
  ) as HTMLInputElement;

  // optional options with default values and callback functions
  options: CopyClipboardOptions = {
    contentType: 'input',
    htmlEntities: false, // infinite
    onCopy: () => {
      console.log('text copied successfully!');
    },
  };

  // instance options object
  instanceOptions: InstanceOptions = {
    id: 'copy-clipboard-example',
    override: true,
  };

  /*
   * $triggerEl: required
   * $targetEl: required
   * options: optional
   * instanceOptions: optional
   */
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

  // copy the value of the target element
}

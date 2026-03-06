import { Component, input } from '@angular/core';

type ButtonRole = 'primary' | 'secondary' | 'outline';
type ButtonLg = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'flix-button',
  imports: [],
  templateUrl: './flix-button.html',
  styleUrl: './flix-button.css',
})
export class FlixButton {
  role = input<ButtonRole>();
  size = input<ButtonLg>();

  get classes(): Array<string> {
    const classes = [];
    // btn-primary
    // btn-secondary
    // btn-outline
    // btn-xs
    // btn-sm
    // btn-md
    // btn-lg
    // btn-xl

    if (this.role()) classes.push(`btn-${this.role()}`);
    if (this.size()) classes.push(`btn-${this.size()}`);

    return classes;
  }
}

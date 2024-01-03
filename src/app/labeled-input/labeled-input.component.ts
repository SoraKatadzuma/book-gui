import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-labeled-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './labeled-input.component.html',
  styleUrl: './labeled-input.component.css',
  host: { 'class': 'labeled-input' }
})
export class LabeledInputComponent {
  @Input() label: string = "";
  @Input() type:  string = "";
}

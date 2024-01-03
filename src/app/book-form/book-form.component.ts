import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LabeledInputComponent } from '../labeled-input/labeled-input.component';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabeledInputComponent,
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
  host: { 'class': 'book-form' }
})
export class BookFormComponent {
}

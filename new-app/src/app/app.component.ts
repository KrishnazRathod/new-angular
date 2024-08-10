import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  StringInterpolation = 'String Interpolation';
  PropertyBinding = 'Property Binding';
  isDisabled = true;
  twoWayBinding = 'twoWayBinding';
  ngFore = ['harry', 'Happy'];

  clickButton = (a: number, b: number) => {
    console.log('a+b:', a + b);
  };
}

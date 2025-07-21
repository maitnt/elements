import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonSlideComponent } from './button-slide/button-slide.component';
import { TypewriterEffectComponent } from './typewriter-effect/typewriter-effect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonSlideComponent, TypewriterEffectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elements';
}

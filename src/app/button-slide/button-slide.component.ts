import { Component } from '@angular/core';

@Component({
  selector: 'app-button-slide',
  standalone: true,
  imports: [],
  templateUrl: './button-slide.component.html',
  styleUrl: './button-slide.component.scss'
})
export class ButtonSlideComponent {
  public activeTab: string = 'left';

  public clickTab(tab: 'left' | 'right') {
    this.activeTab = tab;
  }
}

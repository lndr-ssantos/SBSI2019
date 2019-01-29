import { Component } from '@angular/core';

@Component({
  selector: 'unitmap',
  templateUrl: 'unitmap.html'
})
export class UnitmapComponent {
  private UnitLocal: string;

  constructor() {
    this.UnitLocal = this.getMap();
  }

  private getMap() {
    return 'https://maps.googleapis.com/maps/api/staticmap?center=-10.9676821,-37.0607477&zoom=15&size=400x400&key=[API_KEY]'
  }
}

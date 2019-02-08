import { Component } from '@angular/core';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@Component({
  selector: 'unitmap',
  templateUrl: 'unitmap.html'
})
export class UnitmapComponent {
  private UnitLocal: string;
  private UnitEndereco: string;
  
  constructor(private launchNavigator: LaunchNavigator) {
    this.UnitLocal = this.getMap();
    this.UnitEndereco = "Universidade Tiradentes, Aracaju - Farolandia";
  }

  private getMap() {
    return 'https://maps.googleapis.com/maps/api/staticmap?center=-10.9676821,-37.0607477&zoom=15&size=400x400&key=[API_KEY]'
  }

  navToMaps() {
    this.launchNavigator.navigate(this.UnitEndereco);
  }
}

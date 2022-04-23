import { Component } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { EThemeType } from './services/theme.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly EThemeType = EThemeType;
  public isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
  }

  switchTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme ? EThemeType.Dark : EThemeType.White);
  }
}

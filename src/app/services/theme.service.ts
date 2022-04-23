import { Injectable } from '@angular/core';

import { CThemeProperties } from './theme-properties';
import { EThemeType } from './theme.enums';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeProperties: { [key: string]: any } = CThemeProperties;

  setTheme(themeType: string = EThemeType.White): void {
    for (const key in this.themeProperties[themeType]) {
      document.documentElement.style.setProperty(key, this.themeProperties[themeType][key]);
    }
  }
}

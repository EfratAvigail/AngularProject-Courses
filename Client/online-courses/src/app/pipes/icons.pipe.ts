import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})
export class IconsPipe implements PipeTransform {

  private icons = ['➕', '❌']; 
  private yes = ['👌', '❌']; 

  transform(value: string): any {
    switch (value) {
      case 'add':
        return this.icons[0];
      case 'yo':
        return this.yes[0];
      default:
        return this.icons[1]; 
    }
  }
}

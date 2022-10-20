import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'className',
})
export class ClassNamePipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value ? value.replace(/ /g, '-').toLowerCase() : '';
  }
}

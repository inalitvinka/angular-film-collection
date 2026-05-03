import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})

export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours && remainingMinutes) {
      return `${hours}h ${remainingMinutes}min`;
    }

    if (hours) {
      return `${hours}h`;
    }

    return `${remainingMinutes}min`;
  }
}

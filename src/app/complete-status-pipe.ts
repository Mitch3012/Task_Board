import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeStatus',
})
export class CompleteStatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

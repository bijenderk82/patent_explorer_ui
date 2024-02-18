import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || isNaN(value)) {
      return '0 MB';
    }

    const fileSizeInMB = value / (1024 * 1024);
    return fileSizeInMB.toFixed(2) + ' MB';
  }
}

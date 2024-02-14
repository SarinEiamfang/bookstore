import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface'

@Pipe({
  name: 'contentFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(contents: Content[], searchTerm: string): Content[] {
    if (!contents || contents.length === 0 || !searchTerm) {
      return contents; // No filtering needed if no items or search term provided
    }

    searchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return contents.filter(content => 
      Object.values(content).some(value =>
        (typeof value === 'string' || (Array.isArray(value) && typeof value[0] === 'string')) &&
        value.toString().toLowerCase().includes(searchTerm)
      ) ||
      (Array.isArray(content.cover) && content.cover.some(coverItem => coverItem.toLowerCase().includes(searchTerm))) ||
      (typeof content.price === 'number' && content.price.toString().includes(searchTerm))
    
    
      );
  }
}



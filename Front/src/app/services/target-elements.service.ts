import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetElementsService {
  targetElements: { id: string, selector: string }[] = [];

  constructor() {
  }
}

import { Component } from '@angular/core';
import {TargetElementsService} from "../../services/target-elements.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private targetElementsService: TargetElementsService) {
    this.targetElementsService.targetElements.push({ id: 'footer', selector: '#footer' });
  }
}

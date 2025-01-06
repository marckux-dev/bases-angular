import { Component } from '@angular/core';
import {DbzService} from '../../services/dbz.service';
import {Character} from '../../interfaces/character';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(
    public dbzService: DbzService
  ) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }


  onDeleteCharacter($event: string) {
    this.dbzService.deleteCharacter($event);
  }

  onNewCharacter($event: Character) {
    this.dbzService.addCharacter($event);
  }
}

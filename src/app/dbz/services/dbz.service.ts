import { Injectable } from '@angular/core';
import {Character} from '../interfaces/character';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private charactersList: Character[] = [
    {id: uuid(), name: 'Goku', power: 10000},
    {id: uuid(), name: 'Vegeta', power: 9500},
    {id: uuid(), name: 'Krillin', power: 5000},
    {id: uuid(), name: 'Gohan', power: 6000},
    {id: uuid(), name: 'Piccolo', power: 5500},
    {id: uuid(), name: 'Yamcha', power: 2000},
    {id: uuid(), name: 'Tenshinhan', power: 4000},
    {id: uuid(), name: 'Chaoz', power: 1500},
    {id: uuid(), name: 'Freezer', power: 12000},
    {id: uuid(), name: 'Cell', power: 14000},
    {id: uuid(), name: 'Majin Boo', power: 16000},
  ];

  get characters(): Character[] {
    return [...this.charactersList];
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = {id: uuid(), ...character};
    this.charactersList.push(newCharacter);
  }

  deleteCharacter(id: string): void {
    this.charactersList = this.characters.filter(character => character.id !== id);
  }


}

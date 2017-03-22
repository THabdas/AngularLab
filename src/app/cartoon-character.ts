
import { Component, OnInit } from '@angular/core';
import {CartoonCharacterService} from './cartoon-character.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CartoonCharacter {
  PersonId: number;
  FirstName: string;
  LastName: string;
  Occupation: string;
  Gender: string;
  Picture: string;
}
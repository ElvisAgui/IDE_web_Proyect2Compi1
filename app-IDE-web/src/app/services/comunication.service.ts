import { Injectable } from '@angular/core';
import { Archivos } from 'src/clases/archivos';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  archivos:Array<Archivos> = new Array

  constructor() { }
}

import { GrapsMod } from './../../clases/graps-mod';
import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { Injectable } from '@angular/core';
import { Archivos } from 'src/clases/archivos';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService implements CanActivate {
  archivos:Array<Archivos> = new Array
  textSalida: string = ""
  errores:ManejoErrors = new ManejoErrors()
  graficasExpresion: GrapsMod[] = []

  constructor() { }
  canActivate(router: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return true
  }
}

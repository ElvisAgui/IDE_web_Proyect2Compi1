import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-report-error',
  templateUrl: './report-error.component.html',
  styleUrls: ['./report-error.component.css']
})
export class ReportErrorComponent implements OnInit {
  errores!: ManejoErrors
  constructor(private router: Router,private comunication:ComunicationService) { }

  ngOnInit(): void {
    this.errores = this.comunication.errores
  }

  public regresar(){
    this.router.navigate([''])
  }

}

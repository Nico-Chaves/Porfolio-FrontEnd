import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  idiomaList:any;
  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.idiomaList = data.language;
    })
  }

}

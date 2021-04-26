import {Component, OnInit} from '@angular/core';
import {LocalModel} from "../model/localModel";

@Component({
  selector: 'app-locales-cercanos',
  templateUrl: './locales-cercanos.component.html',
  styleUrls: ['./locales-cercanos.component.scss'],
})
export class LocalesCercanosComponent implements OnInit {

  arrayLocales: LocalModel[] = [
    {
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5797.976499726722!2d-58.51122176102985!3d-34.598664784913964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb76af6cf6e4f%3A0x1fcae0830e255101!2sTwo%20Churros%C2%AE%20Devoto!5e0!3m2!1ses!2sar!4v1619392986984!5m2!1ses!2sar',
      id: 1,
      localidad: 'Devoto',
      direccion: 'Nueva York 4144',
      horarios: [
        {
          dia: 'Lunes',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Martes',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Miercoles',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Jueves',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Viernes',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Sabado',
          horario: '14:00 - 19:00',
        },
        {
          dia: 'Domingo',
          horario: '14:00 - 19:00',
        },
      ]
    },
    {
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.77862325904!2d-58.436445584175374!3d-34.58446766398796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb514ce0be9bd%3A0xff4ba188140845c5!2sTwo%20Churros%C2%AE%20Palermo!5e0!3m2!1ses!2sar!4v1619393176892!5m2!1ses!2sar',
      id: 2,
      localidad: 'Palermo',
      direccion: 'El Salvador 5466',
      horarios: [
        {
          dia: 'Lunes',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Martes',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Miercoles',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Jueves',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Viernes',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Sabado',
          horario: '15:30 - 20:00',
        },
        {
          dia: 'Domingo',
          horario: '15:30 - 20:00',
        },
      ]
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

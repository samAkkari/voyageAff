import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../../../services/reclamationService/reclamation.service";
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as _moment from 'moment';


const moment = _moment;
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class StatComponent implements OnInit {
  dateRec: any;
  nbr: any;

  constructor(private reclamationService: ReclamationService ){
  }

  ngOnInit(): void {
  }

  countRecByDate() {
    this.reclamationService.getByDate(moment(this.dateRec).format('YYYY-MM-DD')).subscribe((res: any) => {
      this.nbr = res;
    });
    console.log(this.nbr);

  }
  pieChartLabels = ['25/07/2022', '26/07/2022', '27/07/2022', '28/07/2022'];
  pieChartData = [3, 2, 5, 1];
  pieChartType :  any ="pie";
}

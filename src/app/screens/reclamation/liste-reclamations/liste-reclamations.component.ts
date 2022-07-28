import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {ReclamationService} from "../../../services/reclamationService/reclamation.service";


interface Reclamation {
  contenue: string ;
  idReclamation: string ;
  titre: string ;
  dateRec : any ;

}

@Component({
  selector: 'app-liste-reclamations',
  templateUrl: './liste-reclamations.component.html',
  styleUrls: ['./liste-reclamations.component.css']
})
export class ListeReclamationsComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    searchText: [''],
  });

  constructor(
    private reclamationService: ReclamationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  reclamationList: Reclamation[] = [];
  displayedColumns: string[] = [
    'idReclamation',
    'dateRec',
    'titre',
    'actions'];


  ngOnInit(): void {
    setInterval(() => {
      this.reclamationList;
    }, 250);
    this.reclamationService.getAll().subscribe((res: any) => {
      this.reclamationList = res;

    });


  }

  handleDelete(reclamation: any) {
    this.reclamationService
      .delete(reclamation.idReclamation)
      .subscribe((data) => {
        this.reclamationList = this.reclamationList.filter(
          (x) => x.idReclamation !== reclamation.idReclamation
        );
      });
  }
  handleRedirectToStat(){
    this.router.navigate([`/stat`]);
  }
  handleRedirectToEdit(reclamation: any) {
    this.router.navigate([`/update-reclamation/${reclamation.idReclamation}`]);
  }
  handleRedirectToShow(reclamation: any) {
    this.router.navigate([`/show-reclamation/${reclamation.idReclamation}`]);
  }

  handleRedirectToAdd() {
    this.router.navigate([`/add-reclamation`]);
  }


  ngOnChanges(text: SimpleChanges) {
    this.reclamationService.getAll().subscribe((res: any) => {
      if (!text) {
        this.reclamationList = res;
      } else {
        this.reclamationList = res.filter((x: any) => {
          return (
            x?.contenue?.includes(text) ||
            x?.titre?.includes(text) ||
            x?.idReclamation.toString()?.includes(text)
          );
        });
      }
    });
    return;
  }


}

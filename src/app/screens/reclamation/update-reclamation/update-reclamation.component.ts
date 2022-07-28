import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamationService} from "../../../services/reclamationService/reclamation.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

modif : boolean;
  updateReclamationForm: FormGroup = this.formBuilder.group({

    contenue: [''],
    titre: [''],
  });
  contenue: string = '';
  titre: string = '';
  idReclamation: string = "" ;

  loading = false;
  submitted = false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if(this.router.url.startsWith("/show-reclamation"))
      this.modif= true;
    this.activatedRoute.params.subscribe((data: any) => {
      this.idReclamation = data.idReclamation;
      this.reclamationService.getById(data.idReclamation).subscribe((res: any) => {
        this.updateReclamationForm = this.formBuilder.group({
          contenue: res.contenue,
          titre: res.titre,
        })
        console.log(res);
      })
    })
  }
  handleRedirectToList(){
    window.location.href = '/liste-reclamations';
  }
  onSubmit(reclamation: any): void {
    let reclamationData = {
      contenue: reclamation.contenue,
      titre: reclamation.titre,
      idReclamation: this.idReclamation
    }
    this.reclamationService.update(reclamationData).subscribe();
    window.location.href = '/liste-reclamations'
  }
}

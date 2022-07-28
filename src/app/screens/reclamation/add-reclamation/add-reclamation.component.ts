import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReclamationService} from "../../../services/reclamationService/reclamation.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
 @Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  addReclamationForm: FormGroup = this.formBuilder.group({


  });
  titre: string = '';
  contenue: string = '';
  messageUser : string = "";
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
  ) {}
  ngOnInit(): void {
    this.addReclamationForm = this.formBuilder.group({
      titre: [''],
      contenue: [''],

    });

  }

  onSubmit(form: any): void {
    let reclamationData = {
      titre : form.titre,
      contenue : form.contenue,
    }
    this.reclamationService.addReclamation(reclamationData).subscribe(()=>{
      this.messageUser = "Votre reclamation à été bien enregistré, un administrateur va le consulter";
    setTimeout(() => {
      window.location.href = '/liste-reclamations';
    }, 1500)
  })
    //window.location.href = '/liste-reclamations';
  }

  getErrorMessage() {}
}


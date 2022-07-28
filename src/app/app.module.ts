import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './screens/login/login.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { ListInvitationsComponent } from './screens/invitations/list-invitations/list-invitations.component';
import { UpdateInvitationComponent } from './screens/invitations/update-invitation/update-invitation.component';
import {ListeReclamationsComponent} from "./screens/reclamation/liste-reclamations/liste-reclamations.component";
import {UpdateReclamationComponent} from "./screens/reclamation/update-reclamation/update-reclamation.component";
import { AddReclamationComponent } from './screens/reclamation/add-reclamation/add-reclamation.component';
import {CKEditorModule} from "ng2-ckeditor";
import { AngularEditorModule } from '@kolkov/angular-editor';
import {CommonModule} from "@angular/common";
import { StatComponent } from './screens/reclamation/stat/stat.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MomentDateModule} from "@angular/material-moment-adapter";
import { ChartsModule } from 'ng2-charts';
 @NgModule({
  declarations: [AppComponent, LoginComponent, SignUpComponent, ListInvitationsComponent, UpdateInvitationComponent,ListeReclamationsComponent, UpdateReclamationComponent, AddReclamationComponent, StatComponent],
  imports: [
    ChartsModule,
    CKEditorModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    AngularEditorModule,
    RouterModule.forRoot([
      { path: 'sign-up', component: SignUpComponent },
      { path: 'liste-invitations', component: ListInvitationsComponent },
      { path: 'update-invitation/:idInvitation', component: UpdateInvitationComponent },
     // { path: '**', component: LoginComponent },
      { path: 'liste-reclamations', component:ListeReclamationsComponent},
      { path: 'update-reclamation/:idReclamation', component: UpdateReclamationComponent },
      { path: 'add-reclamation', component:AddReclamationComponent},
      { path: 'show-reclamation/:idReclamation', component: UpdateReclamationComponent },
      { path: 'stat', component: StatComponent },
    ]),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MomentDateModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [ MatDatepickerModule,  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

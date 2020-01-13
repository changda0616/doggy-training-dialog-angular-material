import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatInputModule, MatDialogRef, MatButtonModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogTempComponent } from './dialog-temp/dialog-temp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogTempComponent,
    DialogTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogTempComponent]  // 因為 Dialog 組件我們是要動態產生的，所以要在這加入設定
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule, MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatRoutes } from './chat.routing';
import { ChatComponent } from './chat.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChatRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  declarations: [
    ChatComponent,
  ],
  entryComponents: [  ],
})

export class ChatModule {}

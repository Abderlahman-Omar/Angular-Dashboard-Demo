import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineAreaComponent } from './Components/Charts/Line-Area/line-area/line-area.component';
import { TicketCardComponent } from './Components/Cards/Ticket-Card/ticket-card/ticket-card.component';
import { TableCardComponent } from './Components/Cards/Table-Card/table-card/table-card.component';
import { TableModule } from 'primeng/table';
import { QRCodeModule } from 'angularx-qrcode';
import { MidPageComponent } from './Components/Mid-Page/mid-page/mid-page.component';
import { TooltipModule } from 'primeng/tooltip';
import { ProductService } from '../service/productservice';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LineAreaComponent,
    TicketCardComponent,
    TableCardComponent,
    MidPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    TableModule,
    QRCodeModule,
    TooltipModule,
    ButtonModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

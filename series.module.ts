import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SeriesListComponent } from './series-list.component';
import { SeriesService } from './series.service';

@NgModule({
  declarations: [SeriesListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SeriesService],
  exports: [SeriesListComponent]
})
export class SeriesModule { }

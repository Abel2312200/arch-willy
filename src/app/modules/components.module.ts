import { TableDataComponent } from './../components/widgets/table-data/table-data.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../components/tools/navbar/navbar.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from '../components/widgets/shopping-item/shopping-item.component';
import {
  TuiIslandModule,
  TuiToggleModule,
  TuiBadgeModule,
} from '@taiga-ui/kit';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BackButtonComponent } from '../components/shared/back-button/back-button.component';
import { OrderFormComponent } from '../components/modals/order-form/order-form.component';
import { ShoppingDetailComponent } from '../components/widgets/shopping-detail/shopping-detail.component';
import { ImageComponent } from '../components/widgets/image/image.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { TableFilterComponent } from '../components/widgets/table-filter/table-filter.component';
import { TableFilterPipePipe } from '../pipes/data/table-filter-pipe.pipe';
import { FooterComponent } from '../components/tools/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PieComponent } from '../components/widgets/charts/pie/pie.component';
import { BarComponent } from '../components/widgets/charts/bar/bar.component';
import { LineComponent } from '../components/widgets/charts/line/line.component';
import { XlsxDownloaderComponent } from '../components/tools/xlsx-downloader/xlsx-downloader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShoppingCardComponent,
    BackButtonComponent,
    OrderFormComponent,
    ShoppingDetailComponent,
    ImageComponent,
    TableDataComponent,
    TableFilterComponent,
    TableFilterPipePipe,
    FooterComponent,
    PieComponent,
    BarComponent,
    LineComponent,
    XlsxDownloaderComponent
  ],
  entryComponents: [],
  providers: [],
  imports: [
    CommonModule,
    TuiButtonModule,
    RouterModule,
    TuiIslandModule,
    NgxImageZoomModule,
    FormsModule,
    TuiToggleModule,
    TuiBadgeModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
  ],
  exports: [
    NavbarComponent,
    ShoppingCardComponent,
    BackButtonComponent,
    OrderFormComponent,
    ShoppingDetailComponent,
    ImageComponent,
    TableDataComponent,
    TableFilterComponent,
    FooterComponent,
    TableFilterPipePipe,
    PieComponent,
    BarComponent,
    LineComponent,
    XlsxDownloaderComponent
  ],
})
export class ComponentModule {}

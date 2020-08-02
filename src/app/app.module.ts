
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
// Routing
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { UploadDataComponent } from './Components/upload-data/upload-data.component';
import { HomeComponent } from './Components/home/home.component';
import { ClassifiedComponent } from './Components/classified/classified.component';
import { DocformComponent } from './Components/docform/docform.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'uploadData', component: UploadDataComponent },
  { path: 'docform', component: DocformComponent },
  { path: 'classified', component: ClassifiedComponent },
  { path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UploadDataComponent,
    HomeComponent,
    ClassifiedComponent,
    DocformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

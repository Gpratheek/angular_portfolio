import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot([], { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }) 
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

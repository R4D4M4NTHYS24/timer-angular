import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component'; // importa el componente

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent, // agrega el componente al arreglo de declaraciones
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

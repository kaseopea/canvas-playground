import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('playground') canvasEl: ElementRef;

  ngAfterViewInit() {
    const canvas = this.canvasEl.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

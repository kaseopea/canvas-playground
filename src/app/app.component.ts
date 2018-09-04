import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('playground') canvas: ElementRef;
  private SCENE_CONFIG = {
    numberOfItems: 100
  };
  private CIRCLE_DEFAULTS_CONFIG = {
    radius: 30,
    strokeWidth: 5
  };

  ngOnInit() {
    this.setViewport(this.canvas.nativeElement);
    requestAnimationFrame(this.Render);
  }

  Render = () => {
    const c = this.canvas.nativeElement.getContext('2d');
    const config = {
      radius: this.CIRCLE_DEFAULTS_CONFIG.radius,
      strokeWidth: this.CIRCLE_DEFAULTS_CONFIG.strokeWidth
    };

    // clear canvas
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 1; i <= this.SCENE_CONFIG.numberOfItems; i++) {
      // generate random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      // construct element
      c.beginPath();
      c.arc(x, y, config.radius, 0, Math.PI * 2, false);
      c.fillStyle = '#ecf0f1';
      c.shadowColor = '#999';
      c.shadowBlur = 20;
      c.shadowOffsetX = 15;
      c.shadowOffsetY = 15;
      c.fill();
      c.lineWidth = config.strokeWidth;
      c.strokeStyle = '#bdc3c7';
      c.stroke();
    }

    requestAnimationFrame(this.Render);
  }

  setViewport(canvas): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

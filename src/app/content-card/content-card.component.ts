import { Component, Input } from '@angular/core'; ///////add input
import { CommonModule } from '@angular/common'; ///////add commonmodule

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule], //////////////add commonmodule
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() bookItem: any;
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  styleUrl: './options-bottom-sheet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {
  openLink(event: MouseEvent) {
    console.log('mi evento');
  }
}

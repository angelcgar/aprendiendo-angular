import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showCounter = signal(false);
  public grade = signal<Grade>('F');

  public frameworks = signal(["Angular", "React", "Vue", "Qkiwk"])

  public frameworks2 = signal([])

  public toggleContent(): void {
    this.showCounter.update((value) => !value);
  }
}

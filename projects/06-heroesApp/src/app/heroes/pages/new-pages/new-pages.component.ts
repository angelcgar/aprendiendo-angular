import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: ``,
})
export class NewPagesComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC comics', desc: 'DC - Comics' },
    { id: 'Marvel comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;

    return hero;
  }

  // bloque para llenar la pagina
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
      });
  }

  onSumit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        // TODO: mostrae snackbar
        this.showSnackbar(`${hero.superhero} updated!`);
      });

      return;
    }

    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      // todo mostrar, y navegar a /heroes/edit/hero.id
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} created!`);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) throw Error('Hero is is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroService.deleteHeroById(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) return;

    //   this.heroService
    //     .deleteHeroById(this.currentHero.id)
    //     .subscribe((wasDeleted) => {
    //       if (wasDeleted) this.router.navigate(['/heroes']);
    //     });
    // });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;

  public interval$?: Subscription; // El $ es una convencion para saber que es un observable

  ngOnInit(): void {
    console.log('PriceComponent - ngOnInit');
    this.interval$ = interval(1000).subscribe((value) => {
      console.log('tick: ', value);
    }); //! Observable que activo, hasta que no lo desactive en el ngOnDestroy, seguira activo
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent - ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    // Destruir los observables y los listeners que esten activos
    console.log('PriceComponent - ngOnDestroy');
    this.interval$?.unsubscribe(); //! Desactivamos el observable
  }
}

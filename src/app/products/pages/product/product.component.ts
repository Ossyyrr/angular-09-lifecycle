import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;
  constructor() {
    console.log('1. constructor');
  }

  increasePrice() {
    this.currentPrice++;
  }

  ngOnInit(): void {
    console.log('2. ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('3. ngOnChanges');
    console.log({ changes });
  }
  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('9. ngOnDestroy');
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProdutoComponent } from './pag-produto.component';

describe('PagProdutoComponent', () => {
  let component: PagProdutoComponent;
  let fixture: ComponentFixture<PagProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

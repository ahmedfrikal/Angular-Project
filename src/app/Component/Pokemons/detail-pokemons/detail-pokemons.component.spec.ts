import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonsComponent } from './detail-pokemons.component';

describe('DetailPokemonsComponent', () => {
  let component: DetailPokemonsComponent;
  let fixture: ComponentFixture<DetailPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPokemonsComponent]
    });
    fixture = TestBed.createComponent(DetailPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

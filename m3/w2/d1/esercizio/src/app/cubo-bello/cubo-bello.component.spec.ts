import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboBelloComponent } from './cubo-bello.component';

describe('CuboBelloComponent', () => {
  let component: CuboBelloComponent;
  let fixture: ComponentFixture<CuboBelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuboBelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuboBelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

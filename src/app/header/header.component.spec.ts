import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('headerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  });



  it('should create the headerComponent', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
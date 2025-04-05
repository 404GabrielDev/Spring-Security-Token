import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProtectedComponent } from './page-protected.component';

describe('PageProtectedComponent', () => {
  let component: PageProtectedComponent;
  let fixture: ComponentFixture<PageProtectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProtectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

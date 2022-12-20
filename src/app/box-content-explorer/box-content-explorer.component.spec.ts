import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentExplorerComponent } from './box-content-explorer.component';

describe('BoxContentExplorerComponent', () => {
  let component: BoxContentExplorerComponent;
  let fixture: ComponentFixture<BoxContentExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

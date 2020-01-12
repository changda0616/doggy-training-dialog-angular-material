import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTempComponent } from './dialog-temp.component';

describe('DialogTempComponent', () => {
  let component: DialogTempComponent;
  let fixture: ComponentFixture<DialogTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappPageComponent } from './whatsapp-page.component';

describe('WhatsappPageComponent', () => {
  let component: WhatsappPageComponent;
  let fixture: ComponentFixture<WhatsappPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

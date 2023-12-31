import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenListComponent } from './token-list.component';

describe('TokenListComponent', () => {
  let component: TokenListComponent;
  let fixture: ComponentFixture<TokenListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenListComponent]
    });
    fixture = TestBed.createComponent(TokenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

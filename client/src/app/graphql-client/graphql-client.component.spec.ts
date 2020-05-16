import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlClientComponent } from './graphql-client.component';

describe('GraphqlClientComponent', () => {
  let component: GraphqlClientComponent;
  let fixture: ComponentFixture<GraphqlClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

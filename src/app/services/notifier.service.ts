import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  equiped: BehaviorSubject<boolean> = new BehaviorSubject(false);
  reset: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
}

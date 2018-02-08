
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public myGlobalVar1: string;
  public myGlobalVar2: string;
  public myGlobalVar3: string;
  public myGlobalVar0: string;
  public myGlobalVar: undefined;
  constructor() {
    console.log('Hello GlobalProvider Provider');
  }

}

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ReactiveFormService {

  constructor() { }

  toFormGroup(data: any) {
    return new FormGroup(data);
}

}

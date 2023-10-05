import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({ value }: AbstractControl) => {
    return value.length > maxLength
      ? {
          maxLength: new TuiValidationError(
            'Error: maximum limit - 3 files for upload'
          ),
        }
      : null;
  };
}

import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!this.prefixIsValid(prefix)) {
      throw Error('Prefix is invalid.');
    }

    const uniqueId = this.generateUniqueId();

    return `${prefix}-${uniqueId}`;
  }

  getNumberOfGeneratedIds() {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    const id = uuidv4();
    this.numberOfGeneratedIds++;

    return id;
  }

  private prefixIsValid(prefix: string): boolean {
    const validPrefixRegex = /^[A-Za-z]+[\w\-\:\.]*$/;

    return prefix && validPrefixRegex.test(prefix);
  }
}

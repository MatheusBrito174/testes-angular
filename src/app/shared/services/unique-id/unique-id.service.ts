import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();

    return `${prefix}-${uniqueId}`;
  }

  getNumberOfGeneratedIds() {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}

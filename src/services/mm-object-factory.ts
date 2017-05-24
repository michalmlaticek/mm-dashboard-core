import { Injectable } from '@angular/core';

@Injectable()
export class MmObjectFactory<T> {
    init(defaultInstance: T, objectToInit?: T, ): T {
        if (objectToInit) {
            for (let prop in defaultInstance) {
                if (objectToInit[prop] === undefined || objectToInit[prop] === null) {
                    objectToInit[prop] = defaultInstance[prop];
                }
            }
            return objectToInit;
        }
        return defaultInstance;
    }
}
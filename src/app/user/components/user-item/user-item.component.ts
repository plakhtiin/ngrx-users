import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from '../../../models/user';

const DISPLAY_USER_FIELDS = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'E-mail' },
  { key: 'address.city', label: 'City' },
  { key: 'address.street', label: 'Street' },
  { key: 'address.zipcode', label: 'ZIP code' },
  { key: 'phone', label: 'Phone' },
  { key: 'website', label: 'Website' },
  { key: 'company.name', label: 'Company Name' },
];

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: [ './user-item.component.scss' ]
})
export class UserItemComponent {
  @Input()
  set user(user: IUser) {
    this.userId = user.id;
    this.prepareUserData(user);
  }

  @Output() clickOnUser: EventEmitter<number> = new EventEmitter<number>();

  userId: number;

  displayUser: { label: string, value: string | number }[] = [];

  constructor() {}

  private prepareUserData(user: IUser): void {
    this.displayUser = [];
    DISPLAY_USER_FIELDS.forEach((field) => {
      this.displayUser.push({
        label: field.label,
        value: this.getObjectValue(user, field.key),
      })
    });
  }

  private getObjectValue(data: {[dataKey: string]: any}, key: string): string | number {
    const pathToValue: string[] = key.split('.');
    let value = data[pathToValue.shift() as string];
    pathToValue.forEach((pathStr: string) => {
      value = value[pathStr];
    });

    return value;
  }
}

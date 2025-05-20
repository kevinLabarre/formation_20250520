import { Roles } from "../enums/roles.enum";

export class User {
  id: number;
  firstName?: string;
  lastName: string;
  email: string;
  role: Roles  //Roles est une enum
  isActive: boolean;
  createdAt: Date;

  constructor(id: number, firstName: string, lastName: string, email: string, role: Roles, isActive: boolean = true) {
    this.id = id,
      this.firstName = firstName,
      this.lastName = lastName,
      this.email = email,
      this.role = role,
      this.isActive = isActive,
      this.createdAt = new Date();

    (this as any).logger();
  }

  get fullName(): string {
    // return this.firstName + " 'test' " + this.lastName
    return `firstname: ${this.firstName} , lastname: ${this.lastName}`
  }

  deactivateAccount(): void {
    this.isActive = false;
  }

  activateAccount(): void {
    this.isActive = true;
  }

}

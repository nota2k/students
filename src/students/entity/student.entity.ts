export class Student {
  name: string;
  email: string;
  date_naissance: Date;
  boursier: boolean;
  constructor(name: string, email: string, date_naissance: Date, boursier: boolean) {
    this.name = name;
    this.email = email;
    this.date_naissance = date_naissance;
    this.boursier = boursier;
  }
}

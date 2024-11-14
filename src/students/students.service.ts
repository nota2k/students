import { Injectable } from '@nestjs/common';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentsService {
  STUDENTS = [
    new Student('Jeanne', 'jeanne.bichon@gmail.com', new Date('1990-01-01'), true),
    new Student('Pierre', 'pierre.barreau@gmail.com', new Date('1997-01-01'), false),
    new Student('Paul', 'p.martin@gmail.com', new Date('1995-01-01'), true)
  ];
  
  // STUDENTS.push(new Student('Pierre', 'p.machin@gmail.com', new Date('1995-01-01'), false));

  findAll(): Student[] {
    console.log(this.STUDENTS);
    return this.STUDENTS;
  }
  
  findOne(nameToFind: string): Student | string {
    for (let student of this.STUDENTS) {
      if (student.name == nameToFind) {
        return student;
      }
    }
    return 'Aucun étudiant avec ce nom dans la liste !';
  }

  findOlder(year: number): Student | string {
      console.log(year);
    for (let student of this.STUDENTS) {
      if (student.date_naissance > new Date(year, 0, 1)) {
        return student;
      }else{
        return null;
      }
    } 
  }

  getStudentsWithScholarships(scholar: boolean): Student | string {
       
    for (let student of this.STUDENTS) {
      if (student.boursier == true) {
        scholar = true;
        return student;
      }else{
        scholar = false;
        return student;
      }
      return 'Aucun étudiant boursier dans la liste !';
    }
    
  }
}

import { Injectable } from '@angular/core';
import { Student } from './models/Student';
import { STUDENTS } from './mock-students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = STUDENTS;
  constructor() {}
  getStudents(): Student[] {
    return this.students;
  }
  updateStudent({ student, index }: { student: Student; index: number }) {
    this.students[index] = {
      ...student,
    };
    return {
      success: true,
    };
  }
}

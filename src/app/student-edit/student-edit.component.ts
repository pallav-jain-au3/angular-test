import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  student?: Student;
  index?: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const index = this.activatedRoute.snapshot.params['id'];
    this.student = this.studentService.getStudents()[index];
    this.index += index + 1;
  }
  onSave(student: Student, index: number) {
    const { success } = this.studentService.updateStudent({
      student,
      index: index - 1,
    });
    if (success) {
      this.router.navigate(['dashboard']);
    }
  }
}

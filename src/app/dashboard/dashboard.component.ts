import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';
import { Student } from '../models/Student';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
  onRowClick({ index }: { index: number }) {
    this.router.navigate([`/dashboard/${index}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
    selector: 'app-course-list',
  //  template: '<h2>Course List</h2>',
  //  styles: ['h2 {color: red}']
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']

})
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8795',
                duration: 120,
                rating: 3.5,
                releaseDate: 'December, 2, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 2,
                releaseDate: 'November, 5, 2020'
            },
            {
                id: 3,
                name: 'Formação Java FullStack',
                imageUrl: '/assets/images/java.png',
                price: 199.99,
                code: 'JKT-0023',
                duration: 240,
                rating: 5,
                releaseDate: 'Outctuber, 31, 2020'
            }
        ]
    }

    



}
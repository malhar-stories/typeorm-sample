import { Injectable, HttpException } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { resolve } from 'dns';

@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses(): Promise<any>{
        return new Promise(resolve => {
            resolve(this.courses);
        });
    }

    getCourse(courseId): Promise<any>{
        let id = Number(courseId);
        return new Promise(resolve => {
            const course = this.courses.find(course => course.id === id);

            if (!course)
                throw new HttpException("Course does not exists.", 400);

            resolve(course);
        });
    }

    addCourse(course): Promise<any>{
        return new Promise(resolve => {
            this.courses.push(course);
            resolve(this.courses);
        });
    }

    deleteCourse(courseId): Promise<any>{
        return new Promise(resolve => {
            let id = Number(courseId);
            let index = this.courses.findIndex(course => course.id === id);
            if (index === -1){
                throw new HttpException("Course does not exists.", 400);
            }
                
            this.courses.splice(index, 1);
            resolve(this.courses);
            // this.courses.
        });
    }
}

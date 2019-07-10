import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleService {
  findAllModulesForCourse = courseId =>
    fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json())
}

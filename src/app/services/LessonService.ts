import {Injectable} from '@angular/core';

@Injectable()
export default class LessonService {
  findAllLessonsForModule = moduleId =>
    fetch(`http://localhost:8080/api/modules/${moduleId}/lessons`)
      .then(response => response.json())
}

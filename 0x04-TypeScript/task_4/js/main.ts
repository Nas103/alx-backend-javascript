// task_4/js/main.ts
import { Cpp, Java, React } from './subjects';
import Teacher from './Teacher';

const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());

const express = require("express");
const {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  getStudentbyUid,
} = require("../controllers/studentController");
const {
  addClasses,
  getAllClassess,
  getClasses,
  updateClasses,
  deleteClasses,
  getClassesByCourse,
} = require("../controllers/classesController");

const {
  addCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const {
  addStudentHasCourse,
  getAllStudentHasCourses,
  getStudentHasCourse,
  updateStudentHasCourse,
  deleteStudentHasCourse,
  getStudentHasCoursebyUid,
} = require("../controllers/studentHasCourseController");
const router = express.Router();
//rotas padrão crud Studants
router.post("/student", addStudent);
router.get("/students", getAllStudents);
router.get("/student/:id", getStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

//rotas padrão crud Studants
router.post("/studenthascourse", addStudentHasCourse);
router.get("/studenthascourses", getAllStudentHasCourses);
router.get("/studenthascourse/:id", getStudentHasCourse);
router.put("/studenthascourse/:id", updateStudentHasCourse);
router.delete("/studenthascourse/:id", deleteStudentHasCourse);

//rotas padrão crud Courses
router.post("/course", addCourse);
router.get("/courses", getAllCourses);
router.get("/course/:id", getCourse);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

//rotas padrão crud Classes
router.post("/classes", addClasses);
router.get("/classess", getAllClassess);
router.get("/classes/:id", getClasses);
router.put("/classes/:id", updateClasses);
router.delete("/classes/:id", deleteClasses);

//rota de alunos pelo UID
router.get("/aluno/:uid", getStudentbyUid);

//rota de cursos que o alunos tem pelo UID
router.get("/alunocursos/:uid", getStudentHasCoursebyUid);

//rota das aulas por curso
router.get("/aula/:course", getClassesByCourse);
module.exports = {
  routes: router,
};

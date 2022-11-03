"use strict";

const firebase = require("../db");
const StudentHasCourse = require("../models/studentHasCourse");
const firestore = firebase.firestore();

const addStudentHasCourse = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("studentHasCourses").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllStudentHasCourses = async (req, res, next) => {
  try {
    const studentHasCourses = await firestore.collection("studentHasCourses");
    const data = await studentHasCourses.get();
    const studentHasCoursesArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const studentHasCourse = new StudentHasCourse(
          doc.id,
          doc.data().uid,
          doc.data().course,
          doc.data().lastclasswatched,
          doc.data().status
        );
        studentHasCoursesArray.push(studentHasCourse);
      });
      res.send(studentHasCoursesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//essa é a rota de UID, herlon seu lindão ATENÇÃO : Retorna um ARRAY
const getStudentHasCoursebyUid = async (req, res, next) => {
  try {
    const uid = req.params.uid;
    const studentHasCourses = await firestore
      .collection("studentHasCourses")
      .where("uid", "==", uid);
    const data = await studentHasCourses.get();
    const studentHasCoursesArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const studentHasCourse = new StudentHasCourse(
          doc.id,
          doc.data().uid,
          doc.data().course,
          doc.data().lastclasswatched,
          doc.data().status
        );
        studentHasCoursesArray.push(studentHasCourse);
      });
      res.send(studentHasCoursesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getStudentHasCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const studentHasCourse = await firestore
      .collection("studentHasCourses")
      .doc(id);
    const data = await studentHasCourse.get();
    if (!data.exists) {
      res.status(404).send("Não foi encontrado estudante com esse id");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateStudentHasCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const studentHasCourse = await firestore
      .collection("studentHasCourses")
      .doc(id);
    await studentHasCourse.update(data);
    res.send("Registro Atualizado com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteStudentHasCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("studentHasCourses").doc(id).delete();
    res.send("Registro Deletado Com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudentHasCourse,
  getAllStudentHasCourses,
  getStudentHasCourse,
  updateStudentHasCourse,
  deleteStudentHasCourse,
  getStudentHasCoursebyUid,
};

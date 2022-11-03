"use strict";

const firebase = require("../db");
const Course = require("../models/course");
const firestore = firebase.firestore();

const addCourse = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("courses").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await firestore.collection("courses");
    const data = await courses.get();
    const coursesArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const course = new Course(
          doc.id,
          doc.data().course,
          doc.data().title,
          doc.data().description,
          doc.data().thumbnailurl,
          doc.data().classesqtd,
          doc.data().videourl,
          doc.data().tags
        );
        coursesArray.push(course);
      });
      res.send(coursesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const course = await firestore.collection("courses").doc(id);
    const data = await course.get();
    if (!data.exists) {
      res.status(404).send("Não foi encontrado estudante com esse id");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const course = await firestore.collection("courses").doc(id);
    await course.update(data);
    res.send("Registro Atualizado com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("courses").doc(id).delete();
    res.send("Registro Deletado Com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};

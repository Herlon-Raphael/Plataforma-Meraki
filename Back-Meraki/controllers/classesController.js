"use strict";

const firebase = require("../db");
const Classes = require("../models/classes");
const firestore = firebase.firestore();

const addClasses = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("classes").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllClassess = async (req, res, next) => {
  try {
    const classess = await firestore.collection("classes");
    const data = await classess.get();
    const classessArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const classes = new Classes(
          doc.id,
          doc.data().course,
          doc.data().numero,
          doc.data().title,
          doc.data().description,
          doc.data().videourl
        );
        classessArray.push(classes);
      });
      res.send(classessArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//essa é a rota para pegar as aulas por curso, herlon seu lindão
const getClassesByCourse = async (req, res, next) => {
  try {
    const course = req.params.course;
    const classess = await firestore
      .collection("classes")
      .where("course", "==", course);

    const data = await classess.get();
    const classessArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const classes = new Classes(
          doc.id,
          doc.data().numero,
          doc.data().course,
          doc.data().title,
          doc.data().description,
          doc.data().videourl
        );
        classessArray.push(classes);
      });
      res.send(classessArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getClasses = async (req, res, next) => {
  try {
    const id = req.params.id;
    const classes = await firestore.collection("classes").doc(id);
    const data = await classes.get();
    if (!data.exists) {
      res.status(404).send("Não foi encontrado estudante com esse id");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateClasses = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const classes = await firestore.collection("classess").doc(id);
    await classes.update(data);
    res.send("Registro Atualizado com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteClasses = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("classes").doc(id).delete();
    res.send("Registro Deletado Com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addClasses,
  getAllClassess,
  getClasses,
  updateClasses,
  deleteClasses,
  getClassesByCourse,
};

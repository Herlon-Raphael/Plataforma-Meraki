"use strict";

const firebase = require("../db");
const Student = require("../models/student");
const firestore = firebase.firestore();

const addStudent = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("students").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const students = await firestore.collection("students");
    const data = await students.get();
    const studentsArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const student = new Student(
          doc.id,
          doc.data().uid,
          doc.data().firstName,
          doc.data().lastName,
          doc.data().cpf,
          doc.data().cep,
          doc.data().street,
          doc.data().homeNumber,
          doc.data().complement,
          doc.data().telephone,
          doc.data().eMail,
          doc.data().status
        );
        studentsArray.push(student);
      });
      res.send(studentsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//essa é a rota de UID, herlon seu lindão ATENÇÃO : Retorna um ARRAY
const getStudentbyUid = async (req, res, next) => {
  try {
    const uid = req.params.uid;
    const students = await firestore
      .collection("students")
      .where("uid", "==", uid);
    const data = await students.get();
    const studentsArray = [];
    if (data.empty) {
      res.status(404).send("Não encontrado");
    } else {
      data.forEach((doc) => {
        const student = new Student(
          doc.id,
          doc.data().uid,
          doc.data().firstName,
          doc.data().lastName,
          doc.data().cpf,
          doc.data().cep,
          doc.data().street,
          doc.data().homeNumber,
          doc.data().complement,
          doc.data().telephone,
          doc.data().eMail,
          doc.data().status
        );
        studentsArray.push(student);
      });
      res.send(studentsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await firestore.collection("students").doc(id);
    const data = await student.get();
    if (!data.exists) {
      res.status(404).send("Não foi encontrado estudante com esse id");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const student = await firestore.collection("students").doc(id);
    await student.update(data);
    res.send("Registro Atualizado com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("students").doc(id).delete();
    res.send("Registro Deletado Com Sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  getStudentbyUid,
};

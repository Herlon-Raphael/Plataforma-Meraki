class course {
  constructor(
    id,
    course,
    title,
    description,
    classesQtd,
    thumbnailUrl,
    videoUrl,
    tags
  ) {
    this.id = id;
    this.course = course;
    this.title = title;
    this.description = description;
    this.thumbnailUrl = thumbnailUrl;
    this.classesQtd = classesQtd;
    this.videoUrl = videoUrl;
    this.tags = tags;
  }
}

module.exports = course;

const Course = (props) => {
  const course = props.course;
  const total = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <p>
        <strong> total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default Course;

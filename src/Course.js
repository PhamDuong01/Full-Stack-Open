const Course = (props) => {
  const course = props.course;
  let total = 0;
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        total += part.exercises;
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

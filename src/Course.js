const Course = (props) => {
  const courses = props.courses;

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        const mycourse = course.parts.map((part) => {
          return (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          );
        });
        const total = course.parts.reduce((s, p) => {
          return s + p.exercises;
        }, 0);

        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            {mycourse}
            <p>
              <strong>total of {total} exercises</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Course;

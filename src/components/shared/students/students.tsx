import { Student } from '../../../shared/models/student';

interface Props {
  students: Student[];
}

export default function StudentsComponent(props: Props): JSX.Element {
  return (
    <ul>
      {props.students.map((v) => (
        <li key={v.id}>
          <p>firstName: {v.firstName}</p>
          <p>lastName: {v.lastName}</p>
          <p>country: {v.country}</p>
        </li>
      ))}
    </ul>
  );
}

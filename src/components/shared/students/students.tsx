import { StudentViewModels } from './view-model';

interface Props {
  viewModels: StudentViewModels;
}

export default function StudentsComponent(props: Props): JSX.Element {
  return (
    <ul>
      {props.viewModels.toArray().map((v) => (
        <li key={v.id}>
          <p>firstName: {v.firstName}</p>
          <p>lastName: {v.lastName}</p>
          <p>country: {v.country}</p>
        </li>
      ))}
    </ul>
  );
}

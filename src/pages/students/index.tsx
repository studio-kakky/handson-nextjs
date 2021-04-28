import { GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout';
import StudentsComponent from '../../components/shared/students/students';
import { GetStudentsResponse } from '../../shared/api/students/response';
import { adaptStudent } from '../../shared/adapters/adapt-student';
import { Student } from '../../shared/models/student';
import { StudentViewModels } from '../../components/shared/students/view-model';

interface Props {
  total: number;
  items: Student[];
}

export default function Students(props: Props): JSX.Element {
  const viewModels = new StudentViewModels(props.items);
  const searched = viewModels.searchByName('P');

  return (
    <Layout>
      <ul>
        <StudentsComponent viewModels={searched} />
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: Props }> => {
  const searchParams = new URLSearchParams({
    limit: '50',
    offset: '0',
  });

  const res = await fetch(`http://localhost:3800/api/students?${searchParams.toString()}`, {
    method: 'GET',
  });
  const result: GetStudentsResponse = await res.json();
  const students = result.items.map(adaptStudent);

  return {
    props: {
      total: result.total,
      items: students,
    },
  };
};

import { GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout';
import StudentsComponent from '../../components/shared/students/students';
import { GetStudentsResponse } from '../../shared/api/students/response';
import { Student } from '../../shared/models/student';
import { adaptStudent } from '../../shared/adapters/adapt-student';

interface Props {
  total: number;
  items: Student[];
}

export default function Students(props: Props): JSX.Element {
  return (
    <Layout>
      <ul>
        <StudentsComponent students={props.items} />
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

  return {
    props: {
      total: result.total,
      items: result.items.map(adaptStudent),
    },
  };
};

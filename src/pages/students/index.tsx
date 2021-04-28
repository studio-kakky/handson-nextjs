import { GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout';
import { GetStudentsResponse } from '../../shared/api/students/response';

interface Props {
  total: number;
  items: {
    id: string;
    name: string;
    country: string;
  }[];
}

export default function Students(props: Props): JSX.Element {
  return (
    <Layout>
      <ul>
        {props.items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: Props }> => {
  const searchParams = new URLSearchParams({
    limit: '10',
    offset: '0',
  });

  const res = await fetch(`http://localhost:3800/api/students?${searchParams.toString()}`, {
    method: 'GET',
  });
  const result: GetStudentsResponse = await res.json();

  return {
    props: result,
  };
};

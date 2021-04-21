import { GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout';

interface Props {
  pageName: string;
}

export default function Students(props: Props): JSX.Element {
  return (
    <Layout>
      <div>{props.pageName}</div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: Props }> => {
  const res = {
    props: {
      pageName: 'this is SSR',
    },
  };

  return Promise.resolve(res);
};

import { FC } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import { BlogPost } from 'src/shared/types';
import { fetch } from 'src/shared/utils/fetch';

type THomeProps = {
  blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts = [] }) => {
  return (
    <div>
      <h1>NEST-NEXT-integration</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async (
  ctx,
) => {
  console.log('GSSP data (home):', ctx.query);
  const blogPosts = await fetch('/api/blog-posts');
  return { props: { blogPosts } };
};

export default Home;


import { useRouter } from 'next/router';
import SinglePost from '@/views/SinglePost';

export default function BlogSlugPage(){
  const router = useRouter();
  const { slug } = router.query;
  return <SinglePost slug={typeof slug==='string'? slug : ''} />;
}

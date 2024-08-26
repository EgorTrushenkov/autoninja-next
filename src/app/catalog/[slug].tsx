import { useRouter } from 'next/router';

export default function AutoPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Auto Page: {slug}</h1>
    </div>
  );
}
'use client';
import { useRouter } from 'next/navigation';

export default function DetailLink() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.push('/');
      }}
    >
      버튼
    </button>
  );
}

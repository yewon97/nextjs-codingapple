'use client';
import { signIn, signOut } from 'next-auth/react';

export default function LoginButton(props) {
  const email = props?.user?.email;
  const handleLogin = () => {
    if (email) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <button type="button" onClick={handleLogin}>
      {email ? '로그아웃' : '로그인'}
    </button>
  );
}

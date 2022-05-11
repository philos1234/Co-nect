import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserCookie } from 'utils/cookie';

export default function AuthHOC({ SpecificComponent, option = true, adminRoute = null }) {
  // option: null => 아무나 출입 가능
  // option: true => 로그인 유저만
  // option: false => 로그인 하면 출입 불가능한 곳(회원가입 등...)
  function AuthenticationCheck() {
    const userInfo = getUserCookie();
    console.log('userInfo', userInfo);
    const navigate = useNavigate();
    useEffect(() => {
      // FIXME: 백요청에 따라 로그인에 따른 라우팅 접근 권한 임시로 풀어놓기
      // if (!userInfo) {
      //   if (option) {
      //     navigate('/login');
      //   }
      // } else {
      //   // 로그인 한 상태
      //   option === false && navigate('/');
      // }
    }, [navigate, userInfo]);
    return <SpecificComponent />;
  }

  return AuthenticationCheck();
}

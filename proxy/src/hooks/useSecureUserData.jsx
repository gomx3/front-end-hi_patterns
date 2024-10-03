import { useEffect, useState } from 'react';

const fetchUserData = () => {
  // 실제로는 API 호출을 통해 사용자 데이터를 받아 온다.
  console.log('Data fetching...');

  return {
    username: 'gildong123',
    password: 'mypassword',
  };
};

const useSecureUserData = () => {
  const [userData, setUserData] = useState(null);

  const isUserAdmin = () => {
    // 관리자 권한을 true로 가정한다.
    // 실제로는 사용자의 권한을 확인하는 로직이 필요하다.
    return true;
  };

  useEffect(() => {
    // ==== Proxy 객체 생성! ====
    const userProxy = new Proxy(fetchUserData(), {
      // 비밀번호 접근 핸들러 -> 관리자인지 확인하고 권한이 있는 경우에만 보여준다.
      get(target, prop) {
        if (prop === 'password' && !isUserAdmin()) {
          console.warn('Unauthorized access to password!');
          return null; // 권한이 없을 경우 null을 반환
        }
        //return target[prop];
        return Reflect.get(target, prop);
      },
    });

    setUserData(userProxy);
  }, []);

  return userData;
};

export default useSecureUserData;
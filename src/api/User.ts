import Request from '@/api/Request';

interface UserRequest {
  name: string;
  phone: string;
}

interface UserResponse {
  id: string;
  name: string;
  phone: string;
}

export const UserPost = (data: UserRequest) =>
  Request<UserResponse, UserRequest>('/users', 'post', data);

async function f() {
  const res = await UserPost({
    name: 'name',
    phone: '12345678901',
  });
  console.log(res);
}
f();

interface UserType {
  uuid: string;
  name: string;
  phone: number;
  email: string;
  password: string;
}

interface UserBodyType {
  name: string;
  phone: number;
  email: string;
  password: string;
}

export { UserType, UserBodyType };

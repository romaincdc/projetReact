import { faker } from "@faker-js/faker";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const createUser = (id: number) => ({
  id,
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
});

export const getMessage = async () => {
  /* const array = Array.from(Array(50).keys())
    await delay(500);
    return array.map(createMessage);*/
  const array = Array.from(Array(3).keys());

  await delay(500);
  return array.map(createMessage);
};
export const createMessage = (id: number) => ({
  id,
  message: faker.lorem.sentence(),
});

export const getUsers = async () => {
  const array = Array.from(Array(50).keys());
  await delay(500);
  return array.map(createUser);
};

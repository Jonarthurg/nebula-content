import dotenv from 'dotenv';
dotenv.config();
console.log(process.env, "<--- ");

const ACCESS_KEY = 'LoWTh1YQtHMt_4sXpiMaFfikNPTEFKC3aBbXdO47u2s'
const BASE_URL = 'https://api.unsplash.com/';
const endPoints = {
  random: 'photos/random/',
}

const param = { 
  randomCar: '?query=car&&count=4',
  randomBoat: '?query=boat&&count=4',
  randomList: '?count=4'
}

export const getUserRequest = async (text) => {

  const response = await fetch(`${BASE_URL}${endPoints.random}?query=${text}&&count=4`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  return response.json();
}

export const randomPhoto = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}

export const getRandomPhotoList = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random/?count=4`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  return response.json();
}

export const carList = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}${param.randomCar}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}

export const boatList = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}${param.randomBoat}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}

export const getUser = (token) => {
  return fetch('/api/users/me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    authorization: `Test test test ${token}`,
    },
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify(userData),
  });
};

export const saveFood = (foodData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `TEST TEST TEST ${token}`,
    },
    body: JSON.stringify(foodData),
  });
};

export const deleteFood = (foodId, token) => {
  return fetch(`/api/users/foods/${foodId}`, {
    method: 'DELETE',
    headers: {
      authorization: `TEST TEST TEST ${token}`,
    },
  });
};

export const searchFoodItem = (query) => {
  return fetch(
    `https://www.mynetdiary.com/foodSearch.do?q=${query}`
  );
};

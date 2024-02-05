type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

const useUsersService = async () => {
  const fetchUsers = (): Promise<User[]> => {
    return fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": "65be48072bbd311aa56cf454",
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  };

  return { fetchUsers };
};

export default useUsersService;

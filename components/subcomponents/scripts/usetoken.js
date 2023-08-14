const usetoken = () => {
  const getJwtToken = () => localStorage.getItem("jwtToken");
  const setJwtTokenfunc = (token) => {
    // console.log(token);
    localStorage.setItem("jwtToken", token);
  };

  const getrefreshToken = async () => {
    const refreshKey = localStorage.getItem("jwtRefresh");
    
    return refreshKey;
  }

  const setrefreshtoken = async (token) => {
    localStorage.setItem("jwtRefresh", token);
  }

  return {
    getJwtToken,
    setJwtTokenfunc,
    getrefreshToken,
    setrefreshtoken
  };
};

export default usetoken;
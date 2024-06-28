export const rememberUser = async (email: string) => {
  localStorage.setItem('email', email);
  return true;
};
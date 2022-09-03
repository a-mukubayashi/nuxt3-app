export const useHello = () => {
  return useState("hello", () => "world");
};

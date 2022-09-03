import type { Ref } from "vue";

export const useCounter = () => {
  const counter: Ref<number> = useState("counter", () => 0);

  const updateCounter = (counter: Ref<number>) => (value: number) => {
    counter.value = value;
  };

  return {
    counter: readonly(counter),
    updateCounter: updateCounter(counter),
  };
};

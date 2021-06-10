import React, { SetStateAction } from "react";

const useToggle = () => {
  const [value, setValue] = React.useState(false);

  const toggleValue: SetStateAction<any> = React.useCallback(() => setValue((prev: boolean) => !prev), []);

  return [value, toggleValue];
};

export default useToggle;

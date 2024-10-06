import { useState } from "react";

const useActionState = (
  initialState = { loading: false, success: false, error: null }
) => {
  const [state, setState] = useState(initialState);

  const start = () => setState({ loading: true, success: false, error: null });
  const success = () =>
    setState({ loading: false, success: true, error: null });
  const error = (errMsg) =>
    setState({ loading: false, success: false, error: errMsg });
  const reset = () => setState(initialState);

  return [state, { start, success, error, reset }];
};

export default useActionState;

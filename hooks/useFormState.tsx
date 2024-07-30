import { useReducer } from 'react';

type StateType = {
  error: string;
  success: boolean;
  loading: boolean;
};

type Action =
  | { type: 'error'; error: string }
  | { type: 'submit' }
  | { type: 'success' };

const initialState = { error: '', success: false, loading: false };

function reducer(state: StateType, action: Action) {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
        loading: true,
        error: '',
        success: false,
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false,
      };
    case 'success':
      return {
        ...state,
        loading: false,
        error: '',
        success: true,
      };
    default:
      return state;
  }
}

export function useFormState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = () => dispatch({ type: 'submit' });
  const setError = (error: string) => dispatch({ type: 'error', error });
  const success = () => dispatch({ type: 'success' });

  return {
    state,
    submit,
    error: setError,
    success,
  };
}

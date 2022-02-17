import { renderHook, act } from '@testing-library/react-hooks';

import { useFormState } from '../../hooks/useFormState';

describe('useFormState', () => {
  it('should return the form state', () => {
    const { result } = renderHook(() => useFormState());

    expect(result.current.state).toStrictEqual({
      error: '',
      success: false,
      loading: false,
    });

    act(() => result.current.submit());

    expect(result.current.state).toStrictEqual({
      error: '',
      success: false,
      loading: true,
    });

    act(() => result.current.success());

    expect(result.current.state).toStrictEqual({
      error: '',
      success: true,
      loading: false,
    });

    act(() => result.current.error('My error message'));

    expect(result.current.state).toStrictEqual({
      error: 'My error message',
      success: false,
      loading: false,
    });
  });
});

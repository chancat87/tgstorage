import type { Inputs, Ref } from 'preact/hooks'
import { useRef, useCallback, useMemo } from 'preact/hooks'

import { usePrevious } from './use-previous'

export const useCallbackRef = <T extends Function>(fn: T, inputs: Inputs): [
  T,
  Ref<T>
] => {
  const callback = useCallback(fn, inputs)
  const callbackRef = useRef(callback)
  const prevCallback = usePrevious(callback)

  if (prevCallback !== callback) {
    callbackRef.current = callback
  }

  return useMemo(() => [
    callback,
    callbackRef
  ], [callback])
}

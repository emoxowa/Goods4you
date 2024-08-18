import { useEffect } from "react"
import { useAppDispatch } from "src/app/store"
import { fetchCartByUserId } from "src/app/store/slices"

export type FetchFirstWrapperProps = {
  children: React.ReactNode
}

export const FetchFirstWrapper = ({
  children,
}: FetchFirstWrapperProps): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCartByUserId(15)).unwrap()
  }, [dispatch])

  return <>{children}</>
}

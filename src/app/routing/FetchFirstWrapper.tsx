import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TOKENS } from "src/app/api"
import { useAppDispatch } from "src/app/store"
import { useGetCurrentUserQuery } from "src/app/store/api/authApi"
import { fetchCartByUserId } from "src/app/store/slices"
import { Spinner } from "src/ui/Spinner"

import { RouterPaths } from "./routerPaths"

export type FetchFirstWrapperProps = {
  children: React.ReactNode
}

export const FetchFirstWrapper = ({
  children,
}: FetchFirstWrapperProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const storageToken = localStorage.getItem(TOKENS.ACCESS_TOKEN)

  const {
    data: user,
    error,
    isLoading: isUserLoading,
  } = useGetCurrentUserQuery(undefined, {
    skip: !storageToken,
  })

  useEffect(() => {
    if (!storageToken) {
      navigate(RouterPaths.AUTH)
      setLoading(false)
    } else if (user && !isUserLoading && !error) {
      dispatch(fetchCartByUserId(user.id))
        .unwrap()
        .then(() => {
          setLoading(false)
          navigate(RouterPaths.MAIN)
        })
        .catch((fetchError) => {
          console.error("Error fetching cart data:", fetchError)
          setLoading(false)
        })
    } else if (error) {
      if ("status" in error && error.status === 401) {
        localStorage.removeItem(TOKENS.ACCESS_TOKEN)
        navigate(RouterPaths.AUTH)
      } else {
        console.error("Failed to fetch user data:", error)
      }
    }
  }, [dispatch, navigate, storageToken, user, isUserLoading, error])

  return <>{loading ? <Spinner /> : children}</>
}

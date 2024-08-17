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
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([dispatch(fetchCartByUserId(15)).unwrap()])
        // } catch (err) {
        //   setError(err as Error)
        //   console.error("Error with initial data fetch:", err)
      } finally {
        console.log("fetchData")
      }
    }

    fetchData()
  }, [dispatch])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error loading data: {error.message}</div>
  // }

  return <>{children}</>
}

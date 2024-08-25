import { useCallback, useEffect, useMemo, useState } from "react"
import { useDebounce } from "src/app/hooks"
import { useSearchProductsQuery } from "src/app/store/api/productApi"
import { Product } from "src/app/store/api/productApi/types"

interface UseProductSearchProps {
  limit: number
  debounceDelay?: number
}

export const useProductSearch = ({
  limit = 12,
  debounceDelay = 2000,
}: UseProductSearchProps) => {
  const [query, setQuery] = useState("")
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState(0)

  const debouncedQuery = useDebounce(query, debounceDelay)

  const { data, isLoading, error, refetch } = useSearchProductsQuery({
    q: debouncedQuery,
    limit,
    skip,
  })

  useEffect(() => {
    if (data && !isLoading && !error) {
      setProducts((prevProducts) =>
        skip === 0 ? data.products : [...prevProducts, ...data.products],
      )
      setTotalProducts(data.total)
    }
  }, [data, isLoading, error])

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery)

    if (newQuery === "") {
      setSkip(0)
      setProducts([])
    }
  }, [])

  const handleShowMore = useCallback(() => {
    setSkip((prevSkip) => prevSkip + limit)
  }, [limit])

  const hasMoreProducts = useMemo(
    () => products.length < totalProducts,
    [products, totalProducts],
  )

  return {
    products,
    isLoading,
    error,
    handleQueryChange,
    handleShowMore,
    hasMoreProducts,
    refetch,
  }
}

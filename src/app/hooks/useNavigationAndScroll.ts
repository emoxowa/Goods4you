import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { RouterPaths } from "src/app/routing/routerPaths"

export const useNavigationAndScroll = () => {
  const navigate = useNavigate()

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      console.warn(`Element with id '${sectionId}' not found.`)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleNavigation = useCallback(
    (sectionId: string) => {
      const currentPath = window.location.pathname

      if (currentPath === RouterPaths.MAIN) {
        scrollToSection(sectionId)
      } else {
        navigate(RouterPaths.MAIN)

        setTimeout(() => {
          scrollToSection(sectionId)
        }, 0)
      }
    },
    [navigate, scrollToSection],
  )

  return {
    scrollToSection,
    scrollToTop,
    handleNavigation,
  }
}

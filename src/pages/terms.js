import SeoHead from '@/components/Seo/SeoHead'
import Terms from './termspolicy/terms'

export default function TermsPage() {
  return (
    <>
      <SeoHead
        title="Terms & conditions"
        description="Terms of use and legal information for HUBOXT software development services and website."
        path="/terms"
      />
      <Terms />
    </>
  )
}

import SeoHead from '@/components/Seo/SeoHead'
import Policy from './termspolicy/policy'

export default function PolicyPage() {
  return (
    <>
      <SeoHead
        title="Privacy policy"
        description="Privacy policy for HUBOXT: how we handle data when you use our website and services."
        path="/policy"
      />
      <Policy />
    </>
  )
}

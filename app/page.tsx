
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { Button } from '@/components/shared/ui/button';

export default function HomePage() {
  return (
    <LandingPrimaryImageCtaSection
      title="Landing page in minutes"
      description="Get 10x more done with Shadcn UI, React & Next.js, and say goodbye to repetitive tasks. You'll never go back."
      imageSrc="/static/images/shipixen/product/1.webp"
      imageAlt="Sample image"
      withBackground
      withBackgroundGlow
      leadingComponent={<LandingProductHuntAward />}
    >
      <Button size="xl" asChild>
        <a href="#">Buy now</a>
      </Button>

      <Button size="xl" variant="outlinePrimary">
        <a href="#">Read more</a>
      </Button>

      <LandingDiscount
        className="w-full"
        discountValueText="$350 off"
        discountDescriptionText="for the first 10 customers (2 left)"
      />
    </LandingPrimaryImageCtaSection>
  );
}

import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from '@/components/ChooseYourCards';
import { ControlBilling } from '@/components/ControlBilling/ControlBilling';
import { ControlBillingSecondSection } from '@/components/ControlBilling-second-section/ControlBilling-second-section';
import { ControlBillingThirdSection } from '@/components/ControlBilling-third-section/ControlBilling-third-section';
import { CounterData } from '@/components/CounterData';
import { FirstBlock } from '@/components/FirstBlock';
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Testimonials } from '@/components/Testimonials';
import { ControlBillingFourthSection } from "@/components/ControlBilling-fourth-section";
import { WhatsappButton } from '@/components/WhatsappButton/WhatsappButton'
import { TermsConditionsDownload } from "@/components/TermConditionsDownload";

export default function Home() {
  return (
    <>
      <Header/>
      <FirstBlock/>
      <CounterData/>
      <BestBusiness/>
      {/* <ChooseYourCards/> */}
      <ControlBilling/>
      <ControlBillingSecondSection/>
      <ControlBillingThirdSection/>
      <ControlBillingFourthSection/>
      {/* <Testimonials/> */}
      <PaymentsMethods/>
      <Footer/>
      <WhatsappButton/>
      <TermsConditionsDownload/>
    </>
  )
}

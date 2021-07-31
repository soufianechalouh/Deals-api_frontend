import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnOneButton.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Features from "components/features/ThreeColWithSideImage.js";


import heroScreenshotImageSrc from "../images/hero-screenshot-1.png";
import FeatureWithSteps from "../components/features/TwoColWithSteps";
import macHeroScreenshotImageSrc from "../images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "../images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import FAQ from "../components/faqs/SingleCol";
import GetStarted from "../components/cta/GetStarted";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Amazon and Walmart's <HighlightedText>Best and Hottest deals!</HighlightedText></>}
        description="Get the latest deals from popular online stores like Amazon and Walmart."
        imageSrc="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?fit=crop&fm=jpg&h=426&w=640"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Get started"
        // watchVideoButtonText="feet The Chefs"
      />
      <TabGrid
        heading={
          <>
            Checkout some <HighlightedText>deals.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We offer more than just a <HighlightedText> Deals API.</HighlightedText>
          </>
        }
        description = "Need a wordpress deals website, linked to our website, ready to be monetized with Amazon/Walmart affiliates? We can deliver that very fast. We also offer other software development services. We're experts in building reliable, structured APIs and web apps using Django and Django Rest Framework, and everything Python related."
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Features
        subheading={<Subheading>Monetizing</Subheading>}
        heading={
          <>
            Ideas to use the API and <HighlightedText>Monetize it</HighlightedText>
          </>
        }
        description = "and of course, you can come up with better ways"
      />
        <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        faqs={[
            {
                question: "Is the API free?",
                answer:
                    "Yes, so far."
            },
            {
                question: "Is there / Will there be a paid plan?",
                answer:
                    "To this date, there is no plans to monetize access to the API in the near future."
            },
            {
                question: "How is this project financed ?",
                answer:
                    " I am personally financing the hosting and maintenance. You can donate to the project in Paypal, it would encourage me to do more."
            },
            {
                question: "Can we ask for other features or some other projects ?",
                answer:
                    "Yes, feel free to contact me about your project."
            }
        ]}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        description = "And we have got answers to all of them"
      />
      <GetStarted
          text="Start using DealsAPI right now"
          primaryLinkText="Login"
          secondaryLinkText = "Sign up"
      />
      <Footer />
    </AnimationRevealPage>
  );
}

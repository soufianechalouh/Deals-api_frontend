import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnOneButton.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


import heroScreenshotImageSrc from "../images/hero-screenshot-1.png";
import FeatureWithSteps from "../components/features/TwoColWithSteps";
import macHeroScreenshotImageSrc from "../images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "../images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
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
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
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
      {/*<MainFeature2*/}
      {/*  subheading={<Subheading>A Reputed Brand</Subheading>}*/}
      {/*  heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}*/}
      {/*  statistics={[*/}
      {/*    {*/}
      {/*      key: "Orders",*/}
      {/*      value: "94000+",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      key: "Customers",*/}
      {/*      value: "11000+"*/}
      {/*    },*/}
      {/*    {*/}
      {/*      key: "Chefs",*/}
      {/*      value: "1500+"*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*  primaryButtonText="Order Now"*/}
      {/*  primaryButtonUrl="https://order.now.com"*/}
      {/*  imageInsideDiv={false}*/}
      {/*  imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"*/}
      {/*  imageCss={Object.assign(tw`bg-cover`, imageCss)}*/}
      {/*  imageContainerCss={tw`md:w-1/2 h-auto`}*/}
      {/*  imageDecoratorBlob={true}*/}
      {/*  imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}*/}
      {/*  textOnLeft={true}*/}
      {/*/>*/}
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}

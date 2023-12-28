import { Button } from "~/components/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FairyBrains" },
    { name: "description", content: "Welcome to FairyBrains!" },
  ];
};

export default function Index() {
  return (
    <header className='relative flex items-center justify-center overflow-hidden h-dvh bg-slate-700'>
      <div className='z-20 flex flex-col items-center justify-center w-full mx-8'>
        <img className='' src='/static/images/hero.svg' alt='' />
        <p className='mt-4 text-base font-normal sm:text-lg sm:mt-4 md:text-xl lg:text-2xl xl:-mt-4'>
          From Dreams to Screens
        </p>
        {/* <Button size={"lg"}>Get Started</Button> */}
      </div>
      <video
        autoPlay
        loop
        muted
        className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
      >
        {/* <source src='/static/video/aura.webm' type='video/webm' /> */}
        <source src='/static/video/aura.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

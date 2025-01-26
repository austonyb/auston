import Link from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";

const Spacer = () => <div className="my-6" />;

export default function Resume() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Auston Youngblood</h1>
          <div className="flex gap-4 mt-2">
            <Link href="https://github.com/austonyb" className="underline">
              Github
            </Link>
            <Link href="https://linkedin.com/in/austonyb" className="underline">
              LinkedIn
            </Link>
            <Link href="/" className="underline">
              Portfolio
            </Link>
          </div>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <h2 className="text-xl font-semibold mb-4">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">Atomic Fi | Salt Lake City, UT</h3>
            <span>June 2024 - Present</span>
          </div>
          <div className="font-medium mb-2">Software Engineer</div>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Successfully developed and maintained multiple payroll automations using JavaScript, TypeScript, Puppeteer, and internal bespoke tools</li>
            <li className="before:content-['>'] before:mr-2">Reverse-engineered payroll provider sites to determine most effective means of automating direct deposit switching</li>
            <li className="before:content-['>'] before:mr-2">Collaborated in a fast-paced environment to support the integration of our SDK with a wide range of customer mobile apps</li>
            <li className="before:content-['>'] before:mr-2">Contributed to enhancing the reliability and UX for users of banking apps (including 7/10 of the top banks in the USA)</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">The Mity Company | Salt Lake City, UT</h3>
            <span>March 2023 - June 2024</span>
          </div>
          <div className="font-medium mb-2">Software Engineer</div>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Technical lead for Symphony of the Cells Android app, utilizing React Native and Expo to deliver a seamless user experience</li>
            <li className="before:content-['>'] before:mr-2">Successfully managed multiple projects in a fast-paced, autonomous environment</li>
            <li className="before:content-['>'] before:mr-2">Developed "Symphony of the Cells" app for iOS using SwiftUI and contributed to its successful launch on the App Store</li>
            <li className="before:content-['>'] before:mr-2">Implemented in-app subscription feature across both Android and iOS platforms through Revenue Cat integration, boosting revenue opportunities for the company</li>
            <li className="before:content-['>'] before:mr-2">Integrated Firebase into client codebases and setup Google Analytics across mobile products</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">Arbor House Books | Salt Lake City, UT</h3>
            <span>April 2019 - June 2024</span>
          </div>
          <div className="font-medium mb-2">Developer</div>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Created ecommerce website for USA Today Bestselling Author Jennifer Youngblood. <Link href="https://jenniferyoungblood.com/" className="underline">jenniferyoungblood.com</Link> - (Shopify)</li>
            <li className="before:content-['>'] before:mr-2">Managed digital media portfolio for multiple published authors</li>
            <li className="before:content-['>'] before:mr-2">Managed digital asset delivery system (audiobooks)</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">Hooley and Burch (SEO Agency) | Salt Lake City, UT</h3>
            <span>January 2023 - April 2023</span>
          </div>
          <div className="font-medium mb-2">Web Developer (Contract)</div>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Enabled ranking improvements through technical web implementations</li>
            <li className="before:content-['>'] before:mr-2">Resolved technical support tickets and fixed bugs</li>
            <li className="before:content-['>'] before:mr-2">Developed front-end code for WordPress sites, demonstrating proficiency in HTML, PHP, CSS, and Vanilla JavaScript</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">DeLon Design | South Jordan, UT</h3>
            <span>June 2021 - December 2022</span>
          </div>
          <div className="font-medium mb-2">Frontend Developer</div>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Effectively managed cross-functional teams to establish technical requirements and project scope for successful execution</li>
            <li className="before:content-['>'] before:mr-2">Created and managed client shopify sites including custom template development</li>
            <li className="before:content-['>'] before:mr-2">Developed and managed company mobile apps</li>
          </ul>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>
        
        <div className="mb-8">
          <h3 className="font-medium mb-2">Author Buddy</h3>
          <ul className="list-none pl-5 space-y-2">
            <li className="before:content-['>'] before:mr-2">Automated Amazon scraping solution for authors to perform market research on competition</li>
            <li className="before:content-['>'] before:mr-2">Built with Next.js, Typescript, Tailwind CSS, Supabase, and Supabase Serverless Functions (for scraping API)</li>
          </ul>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <h2 className="text-xl font-semibold mb-4">EDUCATION</h2>
        
        <div className="mb-4">
          <h3 className="font-medium">Brigham Young University | Provo, UT</h3>
          <ul className="list-none pl-5">
            <li className="before:content-['>'] before:mr-2">BA in Advertising</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Devmountain - Bootcamp | Lehi, UT</h3>
          <ul className="list-none pl-5">
            <li className="before:content-['>'] before:mr-2">iOS App development and built multiple apps using Swift, UIKit, and SwiftUI</li>
          </ul>
        </div>
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
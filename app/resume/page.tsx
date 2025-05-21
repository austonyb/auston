import Link from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";

const Spacer = () => <div className="my-6" />;

export default function Resume() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Auston Youngblood</h1>
          <div className="mt-2 flex gap-4">
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
        <h2 className="mb-4 font-semibold text-xl">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">Strive Pharmacy | Remote</h3>
            <span>March 2025 - Present</span>
          </div>
          <div className="mb-2 font-medium">Software Engineer</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Masterfully developed and maintained multiple pharmacy automation
              tools using TypeScript, Next.js, Postgres, and internal bespoke
              tools
            </li>
            <li className="before:mr-2 before:content-['>']">
              Engaged in building a pharmacy management system using Elixir,
              Phoenix, and LiveView
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">Atomic Fi | Salt Lake City, UT</h3>
            <span>June 2024 - March 2025</span>
          </div>
          <div className="mb-2 font-medium">Software Engineer</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Successfully developed and maintained multiple payroll automations
              using JavaScript, TypeScript, Puppeteer, and internal bespoke
              tools
            </li>
            <li className="before:mr-2 before:content-['>']">
              Reverse-engineered payroll provider sites to determine most
              effective means of automating direct deposit switching
            </li>
            <li className="before:mr-2 before:content-['>']">
              Collaborated in a fast-paced environment to support the
              integration of our SDK with a wide range of customer mobile apps
            </li>
            <li className="before:mr-2 before:content-['>']">
              Contributed to enhancing the reliability and UX for users of
              banking apps (including 7/10 of the top banks in the USA)
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">
              The Mity Company | Salt Lake City, UT
            </h3>
            <span>March 2023 - June 2024</span>
          </div>
          <div className="mb-2 font-medium">Software Engineer</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Technical lead for Symphony of the Cells Android app, utilizing
              React Native and Expo to deliver a seamless user experience
            </li>
            <li className="before:mr-2 before:content-['>']">
              Successfully managed multiple projects in a fast-paced, autonomous
              environment
            </li>
            <li className="before:mr-2 before:content-['>']">
              Developed "Symphony of the Cells" app for iOS using SwiftUI and
              contributed to its successful launch on the App Store
            </li>
            <li className="before:mr-2 before:content-['>']">
              Implemented in-app subscription feature across both Android and
              iOS platforms through Revenue Cat integration, boosting revenue
              opportunities for the company
            </li>
            <li className="before:mr-2 before:content-['>']">
              Integrated Firebase into client codebases and setup Google
              Analytics across mobile products
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">
              Arbor House Books | Salt Lake City, UT
            </h3>
            <span>April 2019 - June 2024</span>
          </div>
          <div className="mb-2 font-medium">Developer</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Created ecommerce website for USA Today Bestselling Author
              Jennifer Youngblood.{" "}
              <Link
                href="https://jenniferyoungblood.com/"
                className="underline"
              >
                jenniferyoungblood.com
              </Link>{" "}
              - (Shopify)
            </li>
            <li className="before:mr-2 before:content-['>']">
              Managed digital media portfolio for multiple published authors
            </li>
            <li className="before:mr-2 before:content-['>']">
              Managed digital asset delivery system (audiobooks)
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">
              Hooley and Burch (SEO Agency) | Salt Lake City, UT
            </h3>
            <span>January 2023 - April 2023</span>
          </div>
          <div className="mb-2 font-medium">Web Developer (Contract)</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Enabled ranking improvements through technical web implementations
            </li>
            <li className="before:mr-2 before:content-['>']">
              Resolved technical support tickets and fixed bugs
            </li>
            <li className="before:mr-2 before:content-['>']">
              Developed front-end code for WordPress sites, demonstrating
              proficiency in HTML, PHP, CSS, and Vanilla JavaScript
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex justify-between">
            <h3 className="font-medium">DeLon Design | South Jordan, UT</h3>
            <span>June 2021 - December 2022</span>
          </div>
          <div className="mb-2 font-medium">Frontend Developer</div>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Effectively managed cross-functional teams to establish technical
              requirements and project scope for successful execution
            </li>
            <li className="before:mr-2 before:content-['>']">
              Created and managed client shopify sites including custom template
              development
            </li>
            <li className="before:mr-2 before:content-['>']">
              Developed and managed company mobile apps
            </li>
          </ul>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <h2 className="mb-4 font-semibold text-xl">PROJECTS</h2>

        <div className="mb-8">
          <h3 className="mb-2 font-medium">Author Buddy</h3>
          <ul className="list-none space-y-2 pl-5">
            <li className="before:mr-2 before:content-['>']">
              Automated Amazon scraping solution for authors to perform market
              research on competition
            </li>
            <li className="before:mr-2 before:content-['>']">
              Built with Next.js, Typescript, Tailwind CSS, Supabase, and
              Supabase Serverless Functions (for scraping API)
            </li>
          </ul>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <h2 className="mb-4 font-semibold text-xl">EDUCATION</h2>

        <div className="mb-4">
          <h3 className="font-medium">Brigham Young University | Provo, UT</h3>
          <ul className="list-none pl-5">
            <li className="before:mr-2 before:content-['>']">
              BA in Advertising
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Devmountain - Bootcamp | Lehi, UT</h3>
          <ul className="list-none pl-5">
            <li className="before:mr-2 before:content-['>']">
              iOS App development and built multiple apps using Swift, UIKit,
              and SwiftUI
            </li>
          </ul>
        </div>
      </FadeIn.Item>
    </FadeIn.Container>
  );
}

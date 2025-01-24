import { Footer } from "@/components/footer";
import Link from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Auston Youngblood</h1>
            <h2>Full-Stack Software Engineer and Recovering Creative</h2>
            <h2>
              <Link href="https://x.com/AustonY" className="underline">
                @AustonY
              </Link>
            </h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Working at{" "}
          <Link href="https://atomic.financial/" className="underline">
            Atomic Financial
          </Link>
          , builder of{" "}
          <Link href="https://authorbuddy.app" className="underline">
            AuthorBuddy
          </Link>
        </p>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Link href="/resume" text="Resume" underline />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="work" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}

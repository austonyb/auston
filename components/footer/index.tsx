import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="flex gap-1 px-[2px] text-muted text-small">
        <Link href="https://github.com/austonyb" text="GitHub" underline />
        <Link href="https://x.com/AustonY" text="X" underline />
        <Link
          href="https://www.linkedin.com/in/auston-youngblood/"
          text="LinkedIn"
          underline
        />
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };

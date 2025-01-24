import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="border-border border-t flex items-center justify-between pt-2 w-full">
      <div className="px-[2px] text-muted text-small flex gap-1">
        <Link href="https://github.com/austonyb" text="GitHub" underline />
        <Link href="https://x.com/AustonY" text="X" underline />
        <Link href="https://www.linkedin.com/in/auston-youngblood/" text="LinkedIn" underline />
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };

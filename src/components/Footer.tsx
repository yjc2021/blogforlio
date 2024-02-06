import { GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-40 w-full items-center bg-card">
      <section className="m-auto flex items-start gap-10 border-2">
        <section className="flex shrink-0 items-start gap-5 border-2">
          <div className="flex flex-col items-start gap-1">
            <div className=" font-bold">최용재</div>
            <div>Lorem ipsum ....</div>
            <div className="mt-1 flex items-center gap-3">
              <EnvelopeClosedIcon />
              <GitHubLogoIcon />
            </div>
          </div>
          <div className=" flex shrink-0 flex-col items-start gap-1">
            <div className="font-bold">Sitemap</div>
            <Link href="/">Hi!</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </section>
        <section className="shrink-0 border-2 border-solid">
          <Image
            className="rounded-lg"
            width={100}
            height={100}
            src={"/profile.jpg"}
            alt="프로필"
          />
        </section>
      </section>
    </footer>
  );
};

export default Footer;

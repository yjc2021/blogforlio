import Image from "next/image";

const Logo = () => {
  return <Image src={`/logo.svg`} alt="로고" width={40} height={40} />;
};

export default Logo;

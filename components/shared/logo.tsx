import Link from "next/link";
import Image from "next/image";
interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <Image src="/logo.svg" width={158} height={38} alt="Meta blog logo" />
      </Link>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { Container } from "./container";
import { SearchInput } from "./search-input";
import { NavList } from "./nav-list";
import { Logo } from "./logo";
import { BtnToggleTheme } from "./btn-toggle-theme";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container className={cn("flex items-center justify-between py-8 px-2")}>
        <Logo />
        <NavList />
        <SearchInput />
        <BtnToggleTheme />
      </Container>
    </div>
  );
};

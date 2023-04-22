import { useMediaQuery } from "@mui/material";

type Props = {
  logo: string;
  link: string;
  rgb?: string;
};

const Link = ({ logo, link, rgb }: Props) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1120px)");

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        alt=""
        src={logo}
        width={isNonMobileScreens ? "40" : "35"}
        height={isNonMobileScreens ? "40" : "35"}
        style={{
          backgroundColor: rgb ? rgb : "",
          borderRadius: rgb ? rgb : "inherit",
        }}
      />
    </a>
  );
};

export default Link;

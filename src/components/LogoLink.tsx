import { useMediaQuery } from "@mui/material";

type Props = {
  logo: string;
  link: string;
  rgb?: string;
};

const Link = ({ logo, link, rgb }: Props) => {
  const isNonMobileScreens = useMediaQuery("(min-width:630px)");

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        alt=""
        src={logo}
        width={isNonMobileScreens ? "40" : "30"}
        height={isNonMobileScreens ? "40" : "30"}
        style={{
          backgroundColor: rgb ? rgb : "",
          borderRadius: rgb ? rgb : "inherit",
        }}
      />
    </a>
  );
};

export default Link;

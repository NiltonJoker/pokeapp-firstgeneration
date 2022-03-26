import { Link, Spacer, Switch, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = () => {
  const { theme } = useTheme();

  const { dark, toggleDark } = useContext(ThemeContext);
console.log(dark);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: dark
          ? theme?.colors.gray900.value
          : theme?.colors.white.value,
        borderBottom: dark ? "0px" : "0.5px solid #9c9c9c",
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              alt="icono de la app"
              width={70}
              height={70}
            />
            <Text color={!dark ? "black" : "white"} h2>
              P
            </Text>
            <Text color={!dark ? "black" : "white"} h3>
              okémon
            </Text>
          </div>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link>
          <Text color={!dark ? "black" : "white"}>Favoritos</Text>
        </Link>
      </NextLink>
      <Spacer />
      <Switch
        checked={!dark}
        size="md"
        color="warning"
        onChange={toggleDark}
        iconOn={<FiSun />}
        iconOff={<FiMoon />}
      />
    </div>
  );
};

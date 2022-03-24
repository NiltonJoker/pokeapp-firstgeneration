import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { theme } = useTheme();

  const router = useRouter();

  const onClickTitle = () => {
    router.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <div
        onClick={onClickTitle}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt="icono de la app"
          width={70}
          height={70}
        />
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </div>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};

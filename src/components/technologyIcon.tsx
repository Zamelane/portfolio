import Image from "next/image";

export function technologyIcon(selectedIcon: string, grayscaleIcon?: string) {
  grayscaleIcon ??= selectedIcon
  return {
    selectedIcon: <Image src={`/icons/${selectedIcon}`} alt={selectedIcon} width={40} height={40} />,
    grayscaleIcon: <Image src={`/icons/${grayscaleIcon}`} alt={grayscaleIcon} width={40} height={40} />
  }
}
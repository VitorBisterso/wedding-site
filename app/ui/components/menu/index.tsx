import DesktopMenu from "./desktopMenu"
import { MenuItemTypes } from "./menuItem"
import MobileMenu from "./mobileMenu"

const items: Record<
  MenuItemTypes,
  { text: string; isButton: boolean; className?: string }
> = {
  [MenuItemTypes.ourHistory]: { text: "Nossa história", isButton: false },
  [MenuItemTypes.eventDetails]: { text: "Detalhes do evento", isButton: false },
  [MenuItemTypes.gifts]: { text: "Presentes", isButton: false },
  [MenuItemTypes.messages]: { text: "Recados", isButton: false },
  [MenuItemTypes.rsvp]: { text: "Confirme sua presença", isButton: true },
}

export default function Menu() {
  return (
    <>
      <MobileMenu
        items={{
          ...items,
          [MenuItemTypes.rsvp]: {
            text: "Confirme sua presença",
            isButton: true,
            className: "p-0 text-xs",
          },
        }}
      />
      <DesktopMenu items={items} />
    </>
  )
}

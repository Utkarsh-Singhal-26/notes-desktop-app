import { ActionButton, ActionButtonProps } from "@/components"
import { createEmptyNoteAtom } from "@/store"
import { useSetAtom } from "jotai"
import { LuFilePlus2 } from "react-icons/lu"

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFilePlus2 className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

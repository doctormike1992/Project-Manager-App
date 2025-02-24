import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

export default function Modal({ ref }) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(<dialog className="backdrop:bg-stone-900/90 absolute top-1/2 left-2/4 right-1/3   px-12
 py-4 rounded-md text-2xl space-y-10" ref={dialog}>
    <h2>Please fill all the inputs...</h2>
    <form method="dialog">
      <button className="bg-stone-700 p-1.5 text-stone-200 rounded-lg cursor-pointer hover:bg-stone-500">Okay</button>
    </form>
  </dialog>,
    document.getElementById('modal')
  )
}
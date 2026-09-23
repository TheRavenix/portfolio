import { useRef, useState } from 'react'

const CLIPBOARD_DURATION_MS = 2000

export type CopyTextOptions = {
  text: string
}

export function useClipboard() {
  const [copied, setCopied] = useState(false)
  const clipboardTimout = useRef<NodeJS.Timeout>(null!)

  const copyText = async (options: CopyTextOptions) => {
    if (copied) {
      return
    }

    try {
      await navigator.clipboard.writeText(options.text)
      setCopied(true)
      clearTimeout(clipboardTimout.current)
      clipboardTimout.current = setTimeout(() => {
        setCopied(false)
      }, CLIPBOARD_DURATION_MS)
    } catch (err) {}
  }

  return { copyText, copied }
}

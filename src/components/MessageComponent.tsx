import { use } from 'react'

interface MessageComponentProps {
  messagePromise: Promise<string>
}

const MessageComponent = ({ messagePromise }: MessageComponentProps) => {
  const message = use(messagePromise)
  return <p>{message}</p>
}

export default MessageComponent

import chatIcon from '../assets/chat.svg'

const ChatNotification = () => {
    return(<div className="flex flex-row justify-center items-center gap-4 shadow-xl rounded-lg bg-white w-80 h-20">
    <img className="w-10" src={chatIcon} alt="ChitChat Logo"/>
  <div className="flex flex-col text-left">
    <h4 className="font-medium text-lg">ChitChat</h4>
    <p className="opacity-70">You have a new message!</p>
  </div>
</div>)
}

export default ChatNotification
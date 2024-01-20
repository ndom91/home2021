import Image from "next/image"

const Avatar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/assets/img/brick-avatar.png"
        quality="100"
        height="128"
        width="128"
        className="mr-4 w-16 h-16 rounded-full"
        alt="ndom91"
      />
    </div>
  )
}

export default Avatar

import Image from "next/image"

const Avatar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/assets/img/avatar.png"
        quality="100"
        height="64"
        width="62"
        className="mr-4 w-12 h-12 rounded-full"
        alt="ndom91"
      />
    </div>
  )
}

export default Avatar

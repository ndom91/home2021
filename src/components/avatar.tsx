import Image from "next/image"

const Avatar = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/img/avatar.png"
        height="64"
        width="62"
        className="mr-4 w-12 h-12 rounded-full"
        alt="ndom91"
      />
      <div className="ml-4 dark:text-gray-200 text-xl font-bold">ndom91</div>
    </div>
  )
}

export default Avatar

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const formattedDate = new Date(dateString).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <time className="text-palevioletred" dateTime={dateString}>
      {formattedDate}
    </time>
  )
}

export default DateFormatter

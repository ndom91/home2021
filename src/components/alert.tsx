import Container from "./container"

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div className="border-gray-100">
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="hover:text-green-200 underline transition-colors duration-200"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href="https://github.com/ndom91/home2021"
                className="hover:text-pink-200 underline transition-colors duration-200"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert

interface Props {
  name: string
  url: string
}

export default function ImageBanner({ name, url }: Props) {
  return (
    <section
      className={`w-full h-48 bg-cover bg-center flex justify-center items-end`}
      style={{ backgroundImage: `url('${url}')` }}
    >
      <article className="container flex">
        <h2 className="font-pacifico text-white text-5xl py-6 drop-shadow-xl">
          {name}
        </h2>
      </article>
    </section>
  )
}

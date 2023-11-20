import Image from 'next/image'
import StickyBar from "@/components/StickyBar";
import {sanityClient, urlFor} from "@/sanity";

export default function Home() {

  return (
    <>
      <StickyBar />

      <div className={'max-w-7xl mx-auto'}>
        <div className={'flex justify-between items-center bg-yellow-400 border-black py-10 lg:py-0'}>
          <div className={'p-10 space-y-5'}>
            <h1 className={'text-6xl max-w-xl font-serif'}><span className={'underline decoration-black'}>Medium</span> is a place to write, read and connect.</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>It's easy and free to post your thinking on any topic and connect with millions of readers</h2>
          </div>
          <img src={"https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"} width={500} height={500} alt={"The logo"} className={'hidden md:inline-flex h-40 w-40'}/>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `
      *[
        _type == 'post'
      ]{
          _id,
          title,
          author -> {
            name,
            image
          },
          description,
          mainImage,
          slug
      }
      `

    const posts = await sanityClient.fetch(query)

    return {
      props: {
        posts
      }
    }
}
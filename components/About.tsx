'use client'
import useGetQuery from "@/state/query/useGetQuery";


const About = () => {

  const { data, isSuccess } = useGetQuery('about', '/about');
  const res = isSuccess ? data.data[0] : [];



  return (
    <div>About</div>
  )
}

export default About
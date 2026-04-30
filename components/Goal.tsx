'use client'

import useGetQuery from "@/state/query/useGetQuery";

const Goal = () => {

  const { data, isSuccess } = useGetQuery('goal', '/goal');
  const res = isSuccess ? data.data[0] : [];



  return (
    <div>goal</div>
  )
}

export default Goal
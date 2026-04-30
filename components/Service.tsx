'use client'

import useGetQuery from "@/state/query/useGetQuery";

const Service = () => {

  const { data, isSuccess } = useGetQuery('service', '/service');
  const res = isSuccess ? data.data[0] : [];

  return (
    <div>Service</div>
  )
}

export default Service
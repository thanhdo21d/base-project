import { Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Button/Button'

const PageNotFound : React.FC = () => {
  return (
    <div className='mt-[150px]'>
      <Result
        status="404"
        title="404"
        subTitle="xin lỗi , trang bạn tìm kiếm không tồn tại ! ."
        extra={
          <Link to='/'>
            <Button className='bg-blue-500 '>Back Home</Button>
          </Link>
        }
      />
    </div>
  )
}
export default PageNotFound

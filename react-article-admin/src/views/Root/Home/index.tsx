import wechat from '@/assets/wechat.jpg'
import { Flex, Image } from 'antd'
import { type FC } from 'react'
import styles from './index.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.containerHome}>
      <h1 className={styles.title}>快来关注我吧~</h1>
      <br />
      <Flex justify="space-between">
        <Image
          width={300}
          height={500}
          className={styles.qrImage}
          src={wechat}
        />
        <Image
          width={300}
          height={500}
          className={styles.qrImage}
          src={wechat}
        />
        <Image
          width={300}
          height={500}
          className={styles.qrImage}
          src={wechat}
        />
      </Flex>
    </div>
  )
}

export default Home

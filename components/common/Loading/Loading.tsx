import * as React from 'react'

import { LoadingIcon } from 'components/common/Loading/LoadingIcon'
import styles from 'components/styles.module.css'

export const Loading: React.FC = () => (
  <div className={styles.container}>
    <LoadingIcon />
  </div>
)

import Form from '@/app/components/login/form/form'
import clsx from 'clsx'
import { useState } from 'react'
import styles from './login.module.scss'
import Panel from '@/app/components/login/panel/panel'

export const Login = () => {
  const [mode, setMode] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  return (
    <div className={styles.login}>
      <div className={clsx(styles.container, mode && styles.rightPanelActive)}>
        <div className={clsx(styles.formContainer, styles.signUpContainer)}>
          <Form
            title={'Create Account'}
            subTitle={'or use your email for registration'}
            isSignUp={true}
            buttonText={'Sign Up'}
          />
        </div>
        <div className={clsx(styles.formContainer, styles.signInContainer)}>
          <Form
            title={'Sign in'}
            subTitle={'or use your account'}
            isSignUp={false}
            buttonText={'Sign in'}
            error={error}
          />
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={clsx(styles.panel, styles.left)}>
              <Panel
                title={'Welcome Back!'}
                subTitle={'Some text'}
                buttonText={'Sign In'}
                onButton={() => setMode(!mode)}
              />
            </div>
            <div className={clsx(styles.panel, styles.right)}>
              <Panel
                title={'Hello, Friend!'}
                subTitle={'Some text'}
                buttonText={'Sign Up'}
                onButton={() => setMode(!mode)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

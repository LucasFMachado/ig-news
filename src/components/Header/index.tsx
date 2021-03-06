import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import Image from 'next/image'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <Image src="/images/logo.svg" alt="Logo" width="100%" height="100%" />

        <nav>
          <ActiveLink activeClassName={ styles.active } href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={ styles.active } href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
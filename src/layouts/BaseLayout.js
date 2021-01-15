import styles from 'BaseLayout.module.css'

export const BaseLayout = ({children}) => {
  return (
      <div className={styles.mainWrapper}>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
  )
}

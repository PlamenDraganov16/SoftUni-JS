import styles from './StyledComponent.module.css'

export default function StyledComponent() {
    return (
        <section>
        <h1>Styled Component</h1>
        <p className={styles['fancy-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit possimus voluptates ratione tempora saepe veritatis, et expedita quisquam! Nisi, ullam.</p>
        </section>
    )
}
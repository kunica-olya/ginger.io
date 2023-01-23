import styles from "./Main.module.scss"
import Logo from '../../assets/svg/Logo-dark.svg'
import Button from "../Button/Button";
import Card from "../Card/Card";
import cardsData from "./../../cardsData"


const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.jumbotron}>
                <div className={styles['background-logo']}></div>
                <div className={styles.subtitle}>
                    <a className={styles.logo} href='#'>
                        <img src={Logo} alt="logo"/>
                    </a>
                    <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                        Instagram </p>
                    <Button/>
                </div>


                <div className={styles.strawberry}></div>


                <div className={styles['second-strawberry']}></div>


                <div className={styles['background-zephir']}></div>
                <div className={styles.background}></div>

            </section>

            <section id={styles.cards}>
                {/*<div className={styles['cards-container']}>*/}
                    <div className={styles.wrapper}>
                        {cardsData.map(product => (
                            <Card
                                key={product.id}
                                // img={product.img}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                weight={product.weight}/>
                        ))}
                    </div>
                {/*</div>*/}
            </section>
        </div>
    )
}
export default Main;


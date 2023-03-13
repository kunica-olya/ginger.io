import {Component} from "react";
import styles from "./OrderTable.module.scss";
import ButtonView from "../../class_components/Button/ButtonView";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ModalView} from "./ModalView";


export class OrderTableView extends Component {

    render() {
        const {showModal, isOpenModal, closeModal} = this.props;
        return (
            <section className={styles['table-section']}>
                <h2>Orders</h2>
                <div className={styles['button-container']}>
                    <ButtonView click={(e) => showModal(e)}
                                text={'Add'}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                    </ButtonView>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div>ID</div>
                        <div>Customer</div>
                    </div>
                    <div className={styles.tbody}>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div>
                    {isOpenModal && <ModalView close={closeModal}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </ModalView>
                    }
                </div>
            </section>
        )
    }
}
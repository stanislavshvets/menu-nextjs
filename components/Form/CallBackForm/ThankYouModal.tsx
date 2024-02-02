import css from "@/styles/thankyoumodal.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState} from "react";
import { IFormProps } from "@/types/form.type";

const ThankYouModal = (props: IFormProps) => {

    const { FormClose, pathname } = props;

    const [secondsLeft, setSecondsLeft] = useState(5);

    const router = useRouter()

    const closeForm = () => {
        FormClose()
        router.push(pathname, { scroll: false})
    }

    useEffect(() => {
        if(secondsLeft <= 0) {
            closeForm()
            return
        }

        const timer = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000)

        return () => clearInterval(timer)
    }, [secondsLeft]);

    return (
        <>
            <div className={css.background} onClick={closeForm} ></div>
            <section className={css.modal}>
                <h2 className={css.h2}>Thank you for your request!</h2>
                <p className={css.txt}>We will contact you as soon as possible</p>
                <div className={css.btn_conteiner}>
                    <button onClick={closeForm} className={css.btn}>CLOSE</button>
                    <p className={css.count_txt}>The window will be closed after <span className={css.count}>{secondsLeft}</span>...</p>
                </div>
            </section>
        </>
    );
};

export default ThankYouModal;
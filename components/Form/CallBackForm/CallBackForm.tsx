'use client'

import css from '@/styles/callbackform.module.css'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { CallBackFormValidator } from "@/components/Form/Validation/formValidator";
import { useRouter, useSearchParams} from "next/navigation";
import { useCallback } from "react";
import { IForm, IFormProps } from "@/types/form.type";

const CallBackForm = (props: IFormProps) => {

    const {FormClose, pathname} = props;

    const searchParams = useSearchParams()
    const router = useRouter();

    const {register,
        handleSubmit,reset,
        formState: {errors, isValid}, resetField, watch} = useForm({
        mode: 'all',
        defaultValues: {
            phoneNumber: "",
        },
        resolver: joiResolver(CallBackFormValidator)
    })

    const setParams = useCallback( (name: string ,value: string) => {
        const params = new URLSearchParams(searchParams)
        params.delete('form')
        params.set(name, value)
        return params.toString();
    }, [searchParams])

    const closeForm = () => {
        FormClose()
        router.push(pathname)
    }

    const submit = (obj: IForm) => {

        pathname === '/' ? obj.page = 'home' : obj.page = pathname.slice(1);

        console.log(obj);

        resetField("phoneNumber", {defaultValue: ''})

        router.push(pathname + '?' + setParams('sending', 'confirm'), { scroll: false})
        FormClose()
    }

    return (
        <>
            <div className={css.background} onClick={closeForm} ></div>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <h2 className={css.h2}>Leave your phone number and we will contact you as soon as possible:</h2>
                <label className={css.label}>
                    <input
                        {...register('phoneNumber')}
                        placeholder='Enter your phone number'
                        className={css.input}/>
                    {errors?.phoneNumber?.message && <span className={css.errors_class}>{errors.phoneNumber.message}</span>}
                </label>
                <div className={css.btn_conteiner}>
                    <button type='submit'
                        disabled={!isValid}
                        className={isValid ? css.btn : css.btn_disabled}>SEND</button>
                    <button onClick={closeForm}
                            className={css.cancel_btn}>CLOSE</button>
                </div>
                <p className={css.policytext}>By submitting the form, you agree to our&nbsp;
                    <Link href={'/privacypolicy'} target = "_blank">Privacy Policy</Link>
                </p>
            </form>
        </>
    );
};

export default CallBackForm;
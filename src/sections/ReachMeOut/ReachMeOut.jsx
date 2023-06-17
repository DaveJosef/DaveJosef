import { useForm } from '@formspree/react';
import React, { useEffect } from 'react';
import { useAnimate, useInView } from 'framer-motion';
import Form from '../../components/Form/Form';
import { Pane } from '../../components/Pane/Pane';
import Section from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { getSection, MultiLanguageString } from '../../utils/data/data';

function ReachMeOut({ language }) {
    const [state, handleSubmit] = useForm('xrgdypnj');

    const FormComponent = () => {
        if (state.succeeded) {
            const submissionString = language === 'portuguese' ? "Obrigado pelo envio!" : "Thanks for your submission!"
            return (
                <p style={{fontSize: "1.75rem"}}>{submissionString}</p>
            );
        }
        return (
            <Form onSubmit={handleSubmit} method="POST">
                <label htmlFor="name">Nome: </label>
                <input required type="text" name="name" id="name"/>
                <label htmlFor="email">E-mail: </label>
                <input required type="email" name="email" id="email"/>
                <label htmlFor="message">Mensagem: </label>
                <textarea required type="text" name="message" id="message" rows="10" cols="40" style={{resize: 'none'}}></textarea>
                <button type="submit">{language !== "portuguese" ? "Send" : "Enviar"}</button>
            </Form>
        );
    }

    const titles = new MultiLanguageString(
        "Entrar em Contato", "Reach Me Out"
    );
    const section = getSection(language, titles);

    const [scope, animate] = useAnimate();
    const inView = useInView(scope);

    useEffect(() => {
        if (inView) {
            animate(scope.current, { opacity: 1, transform: 'none' });
        } else {
            animate(scope.current, { opacity: 0, transform: 'translateX(-200px)' });
        }
    }, [inView]);

    return (
        <Section className="reachMeOut" id='reachmeout'>
            <Pane ref={scope}>
                <Title>{section.title}</Title>
                {section.introduction}
                <FormComponent />
                {section.conclusion}
            </Pane>
        </Section>
    );
}

export default ReachMeOut;
import { useForm } from '@formspree/react';
import React from 'react';
import Form from '../../components/Form/Form';
import { Pane } from '../../components/Pane/Pane';
import Section from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { getSection, MultiLanguageString } from '../../utils/data/data';

function ReachMeOut({ language }) {
    const [state, handleSubmit] = useForm('xrgdypnj');

    const FormComponent = () => {
        if (state.succeeded) {
            const submissionString = language === 'portuguese' ? "Obrigado por sua submissão!" : "Thanks for your submission!"
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
                <button type="submit">Enviar</button>
            </Form>
        );
    }

    const titles = new MultiLanguageString(
        "Entrar em Contato", "Reach Me Out"
    );
    const section = getSection(language, titles);

    return (
        <Section className="reachMeOut" id='reachmeout'>
            <Pane>
                <Title>{section.title}</Title>
                {section.introduction}
                <FormComponent></FormComponent>
                {section.conclusion}
            </Pane>
        </Section>
    );
}

export default ReachMeOut;